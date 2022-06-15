const path = require('path');
// node module 중 path를 가져와서 파일들을 잘 읽을 수 있도록 처리
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',	// 시작 지점인 파일

	module: {					// 번들링을 하며 적용되는 설정
		rules: [{				// loader설정, parser설정 등
			test: /\.js$/,		// 모든 js
			use: 'babel-loader'	// babel.config.js와 연동
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'	// 번들링 된 파일이 적용 될 html
		})
	],

	optimization: { minimizer: [] },	// webpack 압축 기능 끔

	output: {									// 번들링한 파일 위치
		path: path.resolve(__dirname, 'dist'),	// dist 라는 폴더가 생성되며 그 안에 파일이 생성됨
		filename: "bundle.js"					// 번들링한 파일명
	},

	devServer: {
		static: './dist',	// dist의 업데이트가 발생할 때마다
		hot: true			// 런타임으로 업데이트
	}
};