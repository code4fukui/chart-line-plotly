# chart-line-plotly

Plotly.jsを使用した折れ線グラフを描画するWebコンポーネントです。複数の折れ線グラフを同時に描画でき、ラベルやタイトルなどの基本的なグラフオプションを設定できます。

## デモ
デモサイトで確認できます: https://code4fukui.github.io/chart-line-plotly/

## 機能
- 複数の折れ線グラフを同時に描画可能
- グラフのタイトルやラベル、凡例の表示/非表示などのオプション設定が可能
- JSONデータを直接指定したり、外部CSVファイルから読み込むことができる

## 必要環境
Plotly.jsライブラリが必要です。

## 使い方
HTML内にチャートコンポーネントを追加するだけで使用できます。JSONデータを直接記述するか、外部ファイルを指定することができます。

```html
<script type="module" src="./chart-line.js"></script>
<chart-line>
{
  "チャートテスト": [
    { "name": "A", "value": 30 },
    { "name": "B", "value": 20 },
    { "name": "C", "value": 70 }
  ]
}
</chart-line>
```

## データ・API
データは自由に用意できます。サンプルでは、data.go.jpのオープンデータを使用しています。

## ライセンス
MIT License