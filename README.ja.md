# chart-line-plotly

Plotly.jsを使用してインタラクティブな折れ線グラフを描画するためのカスタムHTML要素です。複数のデータシリーズと設定可能なレイアウトをサポートしています。

## デモ

ライブデモはこちらで確認できます: [https://code4fukui.github.io/chart-line-plotly/](https://code4fukui.github.io/chart-line-plotly/)

## 機能

- 単一のJSONデータソースから複数の折れ線シリーズを描画します。
- HTMLで宣言的に、またはJavaScriptでプログラム的に使用できます。
- グラフのサイズ、凡例、その他のレイアウトオプションを設定可能です。
- 事前定義されたカラーパレットから各シリーズに自動的に色を割り当てます。

## 必要条件

- [Plotly.js](https://plotly.com) （CDNから自動的に読み込まれます）

## 使い方

### 宣言的な使用（HTML内）

モジュールをインポートし、HTMLに`<chart-line>`要素を追加します。タグ内にJSONデータを配置してください。

```html
<script type="module" src="./chart-line.js"></script>

<chart-line style="height:400px; width:600px;">
{
  "Series 1": [
    { "name": "A", "value": 30 },
    { "name": "B", "value": 20 },
    { "name": "C", "value": 70 }
  ],
  "Series 2": [
    { "name": "A", "value": 70 },
    { "name": "B", "value": 50 },
    { "name": "C", "value": 30 }
  ]
}
</chart-line>
```

### プログラム的な使用（JavaScript内）

`ChartLine`クラスをインポートし、データを渡してインスタンス化することもできます。

```html
<div id="chart-container"></div>

<script type="module">
  import { ChartLine } from "./chart-line.js";

  const data = {
    "Series 1": [
      { "name": "A", "value": 30 },
      { "name": "B", "value": 20 },
      { "name": "C", "value": 70 }
    ]
  };

  const chart = new ChartLine(data);
  document.getElementById("chart-container").appendChild(chart);
</script>
```

## 構成

### データ形式

本コンポーネントは、各キーがシリーズ名を表す文字列であるJSONオブジェクトを受け付けます。対応する値は、`name`（X軸用）と`value`（Y軸用）を持つオブジェクトの配列である必要があります。

```json
{
  "Series Name": [
    { "name": "x-axis-point-1", "value": 10 },
    { "name": "x-axis-point-2", "value": 20 }
  ]
}
```

### 属性

- `style`: グラフコンテナの`height`と`width`を設定します。
- `options`: JSON文字列を渡してグラフを設定します。このコンポーネントは、[Plotly.jsのレイアウトオプション](https://plotly.com/javascript/reference/layout/)の一部をサポートしています。

凡例を非表示にする例:

```html
<chart-line options='{ "showlegend": false }'>
  ...
</chart-line>
```

## データ出典

デモではdata.go.jpのオープンデータを使用しています。
- DATA: [CC BY data_go_jp_format.csv data.go.jp データカタログサイト統計データ](https://github.com/code4fukui/discovery_datagojp/blob/main/data/data_go_jp_format.csv)

## ライセンス

MIT License
