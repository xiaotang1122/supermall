module.exports = {
	configureWebpack: {
		resolve:{
			extensions:[],
			alias: {
				'assets':'@/assets',
				'common':'@/common',
				'content':'@/content',
				'components':'@/components',
				'notwork':'@/notwork',
				'views':'@/views',
			}
		}
	}
}

