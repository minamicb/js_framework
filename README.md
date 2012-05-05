js_framework
============

htmlコーディング時でのjavascriptによるサポート処理

## ディレクトリ構成

###js
* main.js // jQuery Router plugin使用によるURL別でのcb.js内のメソッド実行処理
* cb.js   // 今回のメイン
* ga.js   // ga非同期トラッキングコード

###js/libs（外部ライブラリ)
* LAB.js [http://labjs.com/] js非同期通信
* fLAB.js（ローカル確認用）
* modernizr.js [http://modernizr.com/] 
* 

## やりたいこと
* JSとhtmlは極力分離する = jQuery Router plugin
* 非同期通信を進めたい = ページ高速化のため LAB.js
* コーディングルールもまとめたい（インデントはスペース？）
* 関数ではなく各処理はプラグイン化したい（デザイナが後ほどオプション操作できるように）

##ほしいプラグイン機能
* 画像ロールオーバー
* スムーススクロール
* タブ切り替え
* プレースホルダ（placeholder属性がつかえるのはそのまま、使えないIEに対応したい）
* ブロックの高さ揃え（オプションで列数、文字縮小対応）
* IE6の透過png対応（裏側でfilter処理になると思うが）
* 文字の小中大切り替え（cookie使用）