# chart-line-plotly

1〜2文で説明。Plotly.jsを使用し、折れ線グラフを描画するWebコンポーネントです。

## デモ
デモサイトで確認できます: https://code4fukui.github.io/chart-line-plotly/

## 機能
- 複数の折れ線グラフを同時に描画できる
- グラフのタイトルやラベルなどのオプション設定が可能
- データをJSONで直接渡すことも、外部CSVファイルから読み込むこともできる

## 必要環境
Plotly.jsライブラリが必要です。

## 使い方
HTMLファイルにチャートコンポーネントを追加するだけで使用できます。JSONデータを直接記述するか、外部CSVファイルを指定できます。

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