import { HttpClient } from './request.ts';

const request = new HttpClient({
  baseURL: './docs/',
  timeout: 5000
});

// 获取会员信息
export const load_md = async (path_id:string) => {
  const res = await request.get<ArrayBuffer>(path_id+".md");
  return res.data; 
}