import { Avatar } from './Avatar.tsx';

function AvatarComponent() {
  return (
    <div className="App">
      <Avatar alt="Hello" size='xl' background='dark' icon="https://camo.githubusercontent.com/9eecc42439347332f256a326363924551042f5b96235f972982512199476611a/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667" shape='round' notification notificationColor='green'/>
    </div>
  );
}

export default AvatarComponent;