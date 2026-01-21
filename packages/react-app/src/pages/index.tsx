import { formatDate} from 'common';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>这是Umi4子应用</h2>
      <p>
        <img src={yayJpg} width="388" alt="yay" />
      </p>
      
      <div className="common-card" style={{ maxWidth: '500px', margin: '20px auto' }}>
        <h3>公共工具库示例</h3>
        <p>当前时间：{formatDate(new Date())}</p>
        
        </div>
      </div>
  );
}
