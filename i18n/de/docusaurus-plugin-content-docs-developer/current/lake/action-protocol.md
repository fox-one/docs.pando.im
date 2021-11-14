---
title: Verschlüsselungsprotokoll
sidebar_position: vier
date: 31-07-2021 11:18:01
---

4swap und Lake sind MTG-Anwendungen, die [Multisig Transaktionen](https://developers.mixin.one/document/wallet/api/multisigs/tutorial) von Mixin Network lesen.

Um Überweisungen zu 4swap oder Lake zu senden, müssen die Entwickler Multisig Transfers erstellen.

4swap und Lake entwerfen das **Aktionsprotokoll** um das Verhalten jeder Transaktion zu veranschaulichen. Das Aktionsprotokoll ist ein JSON-basiertes Protokoll, das die verschlüsselte Memo verwendet, um Instruktionen und Parameter zu speichern.

## Aktionen generieren

Es gibt zwei Ansätze, um die Aktionen zu generieren.

**Benutze SDK**

Wenn Sie [4swap SDK](https://github.com/fox-one/4swap-sdk-go)verwenden, können Sie die SDK Methoden verwenden, um den Prozess zu vereinfachen. Das folgende Beispiel zeigt, wie man eine Swap-Aktion von  `mtg.SwapAction` erzeugt.

```go
// Die ID für die Verfolgung der Aufträge
followID, _ := uuid.NewV4()

// eine Swap-Aktion erstellen, die Parameter
Aktion := mtg. wapAction(
    receiverID,
    followID.String(),
    OutputAssetID,
    vorbestellen. Outs,
    // den minimalen Betrag an Assets erhalten Sie erhalten.
    // Sie können diesen Wert auf eine Zahl ändern, die kleiner ist als preOrder.FillAmount
    preOrder.FillAmount.Div(decimal.NewFromFloat(0. 05)),
)

// memo generieren
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo)
```

**API nutzen**

Rufen Sie die API ["/api/actions"](./apis/actions) auf, um eine signierte Überweisungsanfrage zu erhalten, mit der Sie den Wallet-Service direkt aufrufen können.

Es wäre langsamer als der SDK-Ansatz, aber Sie müssten keine Aktionen generieren und sie selbst signieren.

## Technische Daten

### Liquidität hinzufügen

Wenn Sie einem bestehenden Paar Liquidität hinzufügen wollen Sie müssen zwei Transfers dieser beiden Assets in der 4swap-Adresse des Hauptnetzes senden.

Für jede Übertragung sollte die Memo in folgender Form erstellt werden:

```json
{
  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"
}
```

in dem,

- `{receiver_id}` ist die ID des Benutzers, der das LP-Token erhalten wird
- `{follow_id}` ist eine UUID um den Transfer zu verfolgen. Sie können `UUID.v4()` verwenden, um eine zu erstellen
- `{asset_id}` ist die gegenteilige Asset-ID des Paars, das Sie hinterlegen möchten. Wenn Sie zum Beispiel Liquidität zu [ETH/BTC Paar hinzufügen wollen,](https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b-8e0d-d9d19b6592fa), die Asset Id ist `43d61dcd-e413-450d-80b8-101d5e903357`, wenn Sie `BTC` und `c6d0c728-2624-429b-8e0d-d9d19b6592fa` anders.
- `{slippage}` ist das Slippage Verhältnis, z.B. 0.001 = 0.1%. Es kann fehlschlagen, wenn Sie einen kleinen Slippage Wert angeben, wenn der Markt volatil ist
- `{timeout}` ist der Timeout in Sek. Wenn Sie die beiden Transfers nicht rechtzeitig abschließen, wird die Crypto in `Timeout` an Sie zurückerstattet.

Wenn die beiden Transfers von der 4swap- oder Lake vor der Auszeit abgewickelt wurden, der Benutzer, den Sie in der Memo `receiver_id` angegeben haben, erhält einige LP-Marken dieses Paars.


### Liquidität entfernen

Wenn Sie die Liquidität eines Paares entfernen wollen, müssen Sie die LP-Token an die Hauptnetzadresse des 4swaps übertragen. Seine Notiz sollte in einer solchen Form sein:

```json
{
  "action": "2,{receiver_id},{follow_id}"
}
```

in dem,

- `{receiver_id}` ist die Id des Benutzers, der die Kryptographie erhalten wird
- `{follow_id}` ist eine UUID um die Übertragung zu verfolgen

Wenn die Übertragung bearbeitet wurde, erhält der Benutzer, den Sie in der Memo `receiver_id` angegeben haben, die entsprechenden Crypto-Assets.

### Krypto tauschen

Wenn du ein Krypto an eine andere tauschen möchtest Sie müssen die Kryptos, die Sie bereitstellen wollen, an die Mainnet-Adresse des 4swaps übertragen. Die Übertragungsnotiz sollte in einer solchen Form sein:

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

in dem,

- `{receiver_id}` ist die ID des Benutzers, der das LP-Token erhalten wird
- `{follow_id}` ist eine UUID um die Übertragung zu verfolgen
- `{fill_asset_id}` ist die ID des Assets, die Sie zum Swapping verwenden werden
- `{routes}` ist die Reihenfolge der Routennummern, die angibt, welche Route Sie verwenden möchten.
- `{minimum}` ist der Mindestbetrag an Assets die Sie erhalten werden

Wenn 4swap oder der See die minimale Ziel-Kryptographie nicht erhalten kann, wird der Austausch abgebrochen und die Kryptos, die Sie an die Mainnet-Adresse senden, zurückerstattet.

## 4swap oder Lake Transfer Memo parsen

> Die Transfer-Memo ist eine base64 dekodierte json-Zeichenkette

```json5
{
  "s": "4swapTrade|4swapRefund", // 4swapTrade: swap Successful, 4swapRefund: swap failed
  "t": "bf0c984d-7f8a-424e-bddd-473fcf5f7020", // follow id
}
```
