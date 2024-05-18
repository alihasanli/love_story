import { useState } from 'react';
import './card.scss';
import profilePhoto from './../../src/assets/profilePhoto.jpg'
import cardImage from './../../src/assets/card.png'

const CardComponent = ({ imgpath }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimation = () => {
        setIsAnimating(true);
        setIsLiked((prev) => !prev);
        setTimeout(() => {
            setIsAnimating(false)
        }, 200);
    }
    return (
        <div className='card_component'>
            <div className="card_top">
                <div className="card_author">
                    <div className="author_photo">
                        <img src={profilePhoto} alt="profile" />
                    </div>

                    <div className="author_content">
                        <div className="author_name">
                            <span>Ad</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M11.936 11.6757L10.5172 8.63317V8.63303C10.6756 8.45329 10.7638 8.22242 10.7658 7.98278V7.17592C10.7658 7.1172 10.7811 7.05967 10.8106 7.009L11.2142 6.30988C11.3022 6.15757 11.3484 5.98499 11.3484 5.80912C11.3484 5.63326 11.3022 5.46068 11.2142 5.30837L10.8106 4.60925C10.7813 4.55858 10.7658 4.50105 10.7658 4.44233V3.63547C10.7659 3.4596 10.7197 3.28672 10.6318 3.1344C10.5439 2.98209 10.4175 2.85556 10.265 2.76748L9.56637 2.36389C9.51555 2.33483 9.47337 2.29265 9.44416 2.24168L9.04058 1.54302C8.95264 1.39071 8.82611 1.26418 8.6738 1.17625C8.52134 1.08832 8.34846 1.04212 8.17258 1.04227H7.36644C7.30772 1.04227 7.2502 1.02691 7.19952 0.997553L6.50041 0.59458C6.34809 0.506649 6.17551 0.460449 5.99965 0.460449C5.82378 0.460449 5.6512 0.506649 5.49889 0.59458L4.80023 0.998164C4.74941 1.02752 4.69188 1.04302 4.63331 1.04302H3.82599C3.65013 1.04288 3.47725 1.08908 3.32493 1.17701C3.17261 1.26494 3.04608 1.39132 2.958 1.54378L2.55442 2.24244C2.52535 2.29326 2.48318 2.33544 2.43221 2.36465L1.73355 2.76823C1.58123 2.85617 1.4547 2.9827 1.36677 3.13501C1.27884 3.28748 1.23264 3.46036 1.23279 3.63623V4.44309C1.23279 4.50166 1.21744 4.55919 1.18808 4.61001L0.785104 5.3084C0.606262 5.61825 0.606262 6.00008 0.785104 6.30992L1.16336 6.96463C1.20926 7.04436 1.2334 7.13468 1.23355 7.22663V7.98283C1.23549 8.22233 1.32387 8.45333 1.48214 8.63307L0.0633049 11.6756V11.6758C-0.00555004 11.8224 -0.0188121 11.9894 0.026344 12.1451C0.0713532 12.301 0.171654 12.435 0.308318 12.5223C0.444982 12.6095 0.608774 12.6441 0.769131 12.6195L2.31208 12.3839L3.1236 13.7192C3.24476 13.9182 3.46086 14.0396 3.6938 14.0396H3.73091C3.85132 14.0328 3.96772 13.9936 4.06772 13.9259C4.16773 13.8583 4.24731 13.7648 4.29843 13.6554L5.51964 11.0364C5.81756 11.2038 6.18121 11.2038 6.47911 11.0364L7.70226 13.6511C7.75308 13.7606 7.83267 13.8542 7.93267 13.922C8.03267 13.9897 8.14922 14.029 8.26979 14.0356H8.3069C8.53984 14.0356 8.75596 13.9141 8.8771 13.7152L9.68861 12.3798L11.2316 12.6154C11.3916 12.6399 11.5551 12.6053 11.6917 12.5181C11.8282 12.4311 11.9283 12.2972 11.9735 12.1418C12.0186 11.9864 12.0058 11.8197 11.9374 11.6731L11.936 11.6757ZM3.6942 13.3689L2.88268 12.0336H2.88254C2.81383 11.921 2.71338 11.8315 2.59385 11.7757C2.47448 11.7202 2.34124 11.7009 2.21084 11.7207L0.668153 11.9544L2.0369 9.02096L2.4335 9.25032C2.48447 9.27953 2.52664 9.32171 2.55571 9.37253L2.95929 10.0712C3.04722 10.2235 3.17375 10.35 3.32621 10.438C3.47853 10.5259 3.65141 10.5721 3.82728 10.5719H4.6346C4.69317 10.5719 4.7507 10.5874 4.80152 10.6167L4.93967 10.6964L3.6942 13.3689ZM5.99964 10.4902C5.94107 10.49 5.88354 10.4747 5.83272 10.4455L5.1336 10.0419C4.98129 9.95423 4.80871 9.90818 4.63284 9.90833H3.82598C3.70675 9.90833 3.59662 9.84469 3.537 9.74141L3.13342 9.04275H3.13327C3.04564 8.88999 2.91881 8.76316 2.76605 8.67553L2.06739 8.27195V8.2718C1.96411 8.21218 1.90047 8.10205 1.90047 7.98282V7.22662C1.90032 7.01752 1.84533 6.81201 1.74085 6.63079L1.36334 5.97608C1.30373 5.8728 1.30373 5.74552 1.36334 5.64224L1.76693 4.94312C1.85456 4.79081 1.90061 4.61823 1.90046 4.44236V3.6355C1.90046 3.51627 1.9641 3.40614 2.06738 3.34652L2.76604 2.94294V2.94279C2.9188 2.85501 3.04548 2.72833 3.13327 2.57557L3.53685 1.87691H3.537C3.59661 1.77363 3.70675 1.70999 3.82598 1.70999H4.6333C4.80901 1.71013 4.98159 1.66408 5.13406 1.57645L5.83272 1.17287C5.936 1.11325 6.06328 1.11325 6.16656 1.17287L6.86567 1.57645C7.01799 1.66408 7.19057 1.71013 7.36643 1.70999H8.17329C8.29252 1.70999 8.40266 1.77363 8.46227 1.87691L8.86586 2.57557H8.86601C8.95379 2.72833 9.08047 2.85501 9.23323 2.94279L9.93189 3.34637V3.34652C10.0352 3.40614 10.0988 3.51627 10.0988 3.6355V4.44236C10.0987 4.61823 10.1447 4.79081 10.2323 4.94312L10.6359 5.64224C10.6955 5.74552 10.6955 5.8728 10.6359 5.97608L10.2323 6.67474C10.1447 6.8272 10.0987 6.99978 10.0988 7.1755V7.98236C10.0988 8.10174 10.0352 8.21187 9.93189 8.27149L9.23323 8.67507C9.08047 8.76285 8.95364 8.88953 8.86601 9.0423L8.46242 9.74095L8.46227 9.7411C8.40266 9.84438 8.29252 9.90802 8.17329 9.90802H7.36643C7.19057 9.90772 7.01799 9.95378 6.86567 10.0416L6.16656 10.4454C6.11574 10.4747 6.05821 10.49 5.99964 10.4902ZM9.78843 11.7224C9.65803 11.7024 9.52479 11.7214 9.40511 11.7771C9.28558 11.8328 9.18528 11.9225 9.11673 12.0352L8.30551 13.3706L7.06092 10.6999L7.19952 10.6201C7.2502 10.5908 7.30772 10.5753 7.36644 10.5753H8.17331C8.34917 10.5754 8.52205 10.5292 8.67437 10.4413C8.82668 10.3534 8.95322 10.227 9.0413 10.0745L9.44488 9.37585C9.47394 9.32503 9.51612 9.28285 9.56709 9.25364L9.96369 9.02428L11.3324 11.9578L9.78843 11.7224ZM8.06677 5.04369L5.73989 7.37088C5.60963 7.50114 5.3983 7.50114 5.2679 7.37088L3.93254 6.03552C3.80601 5.90452 3.8078 5.69632 3.93657 5.56754C4.06533 5.43875 4.27354 5.43683 4.40455 5.56336L5.50382 6.66263L7.59465 4.5715H7.5948C7.7258 4.44497 7.934 4.4469 8.06278 4.57567C8.19157 4.70444 8.19334 4.91264 8.06681 5.04366L8.06677 5.04369Z" fill="#222222" />
                            </svg>
                        </div>

                        <div className="location">
                            <p>Bakı, Azərbaycan</p>
                        </div>
                    </div>
                </div>

                <div className="card_price">
                    <p>Qiymət: 50 AZN</p>
                </div>
            </div>

            <div className="card_image">
                <img src={cardImage} alt="wedding" />
            </div>

            <div className="card_bottom">
                <div className="likes">
                    <svg style={isLiked ? { transform: isAnimating ? 'scale(0.8)' : 'scale(1)' } : {transform: isAnimating? 'scale(0.9)' : 'scale(1)'}} xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none" onClick={handleAnimation}>
                        <path d="M8.35 1C10.0404 1 11.5823 1.84142 12.75 2.8C13.9177 1.84142 15.4596 1 17.15 1C20.7951 1 23.75 3.71049 23.75 7.05386C23.75 13.795 16.0774 17.721 13.5481 18.8321C13.0386 19.056 12.4614 19.056 11.9519 18.8321C9.42259 17.721 1.75 13.7948 1.75 7.0537C1.75 3.71033 4.70492 1 8.35 1Z" stroke={isLiked ? '#FF2626' : '#222222'} stroke-width="2" />
                    </svg>
                    <span>121212</span>
                </div>

                <div className="description">
                    <p>“Lorem ipsum dolor sit amet, cons ectetu rad ipiscing elit”</p>
                </div>

                <div className="tags">
                    <span>#tag</span>
                </div>
            </div>
        </div>
    )
}

export default CardComponent