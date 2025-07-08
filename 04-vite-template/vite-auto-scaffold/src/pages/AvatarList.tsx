import {Avatar} from '../components/Avatar';

function AvatarListPage() {
  
  return (
    <ul className="avatarList">
      <Avatar name="JjangGoo" status="online" />
      <Avatar name="JjangAh" status="online" />
      <Avatar name="MaengGoo" status="online" />
      <Avatar name="YooRi" status="online" />
      <Avatar name="Misun" status="online" />
    </ul>
  );
}

export default AvatarListPage;