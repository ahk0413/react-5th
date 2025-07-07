import { createElement as h } from "../lib/react.js";
import Avatar from "../components/avatar/Avatar.js";



export function AvatarPage() {
  return h(
    'ul',
    {
      className:'avatarList',
    },
    h(Avatar,{name:'JjangGoo', status:'online'}),
    h(Avatar,{name:'Misun', status:'dont-disturb'}),
    h(Avatar,{name:'JjangAh', status:'offline'}),
    h(Avatar,{name:'MaengGoo', status:'away'}),
  )
}