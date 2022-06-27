import axios from "axios";
import fs from 'fs';
import { headers } from './config.js'

axios.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=casamia__food', {headers}).then((res) => {
  const data = res.data.data;
  const latestPost = data.user.edge_owner_to_timeline_media.edges[0].node
  const text = latestPost.edge_media_to_caption.edges[0].node.text.split('\n')[0];
  const imgs = latestPost.edge_sidecar_to_children.edges.map((edge) => edge.node.display_url );
  console.log('텍스트', text);
  console.log('이미지', imgs);
})

console.log(headers);