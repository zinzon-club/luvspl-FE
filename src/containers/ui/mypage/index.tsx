import info from './data';
import Image from 'next/image';

const Mypage = () => {
    return (
        <div>
            <Image src={info.img} alt={'프로필사진'} width={400} height={400} />
            <div>{info.name}</div>
            <div>{info.mail}</div>
        </div>
    )
}
export default Mypage;