import { h, Fragment } from '@openinula/next';
import { Button } from 'inulaUI';

export default function ButtonDemo() {
  let loading = false;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <Button type="primary" loading={loading} onClick={() => {
        loading = true;
        setTimeout(() => loading = false, 1500);
        console.log(loading);
      }}>点击加载</Button>
    </div>
  );
} 

// export default function Counter() {
//   let count = 0;  // 直接声明状态
  
//   return (
//     <div>
//       <p>计数: {count}</p>
//       <Button onClick={() => count++}>增加</Button>
//     </div>
//   );
// }