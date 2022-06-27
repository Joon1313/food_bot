import axios from "axios";

const headers = {
origin: 'https://www.instagram.com',
referer: 'https://www.instagram.com/',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
'x-asbd-id': 198387,
'x-csrftoken': '5Z8rzLWqEX2RZ7AkJnyZ3j0mc3qeBQJN',
'x-ig-app-id': 936619743392459,
'x-ig-www-claim': 'hmac.AR2GFsDsOVKworhmtaVxdygzivrmYpeDoHaF29ZXLuk5m-rG',
}

axios.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=casamia__food', {headers}).then((res) => {
  const data = res.data.data;
  const latestPost = data.user.edge_owner_to_timeline_media.edges[0].node
  const text = latestPost.edge_media_to_caption.edges[0].node.text;
  const imgs = latestPost.edge_sidecar_to_children.edges.map((v) => v.node.display_url );
  console.log('텍스트', text);
  console.log('이미지', imgs);
})