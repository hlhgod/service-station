// module.exports = {
//     devServer: {
//       proxy: {
//         '/': {
//           target: 'http://hhyd.hhbhkj.com',   //要访问的跨域的域名
//           ws: true,  // 是否启用websockets
//           changeOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
//         },
//         '/party-building': {
//           target: 'http://hhyd.hhbhkj.com',
//           ws: true,  // 是否启用websockets
//           changeOrigin: true //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数
//         }
//       }
//     }
//   }
