// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/bundle-index.ts', // エントリーポイント
    output: {
        file: 'dist/bundle.js', // 出力ファイル
        format: 'cjs', // 出力フォーマット (CommonJS)
		sourcemap: true
    },
    plugins: [
        typescript() // TypeScriptプラグイン
    ]
};
