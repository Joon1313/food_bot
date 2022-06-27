import axios from "axios";
import fs from 'fs';
import { headers } from './config.js'

// 인스타 크롤링
const res = await axios.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=casamia__food', {headers});
const data = res.data.data;
const latestPost = data.user.edge_owner_to_timeline_media.edges[0].node
const text = latestPost.edge_media_to_caption.edges[0].node.text.split('\n')[0];
const urls = latestPost.edge_sidecar_to_children.edges.map((edge) => edge.node.display_url );
console.log(text);

// 비동기 제어
// Promise.all(urls.map(imgFetch))
// function imgFetch(url){
//   axios.get(url, {responseType: 'arraybuffer'}).then((res) => {
//     fs.writeFile(`./imgs/f.jpg`, buffer.data, (err)=>{
//       console.log(err);
//     });
//   });
// }

// 이미지 파일 write
urls.forEach(async (url, i) => {
  const buffer = await axios.get(url, {responseType: 'arraybuffer'});
  fs.writeFile(`./imgs/f${i}.jpg`, buffer.data, (err)=>{
    console.log(err);
  });
})


// 저장된 이미지 파일 read
fs.readdir('./imgs',(err, fileList)=>{
  console.log(fileList)
})
