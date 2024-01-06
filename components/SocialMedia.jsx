export default function SocialMedia() {
    return (
        <div className="flex justify-end text-white my-11">
            <div className="w-3/4  px-10">
                <div className='text-3xl text-white font-light w-fit'>
                    Social Media
                    <hr className='py-6' />
                </div>
                <div className="flex justify-around ">
                    <button className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10 ">
                        <div className="transition ease-in-out bg-zinc-950 border border-zinc-700 rounded-lg hover:bg-gradient-to-b from-zinc-800 to-transparent w-52 h-52 hover:border-white">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="m-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 60 60" fill="none">
                                        <g clip-path="url(#clip0_4_196)">
                                            <path d="M0 4.2975C0 1.92375 1.9725 0 4.40625 0H55.5938C58.0275 0 60 1.92375 60 4.2975V55.7025C60 58.0763 58.0275 60 55.5938 60H4.40625C1.9725 60 0 58.0763 0 55.7025V4.2975ZM18.5362 50.2275V23.1338H9.5325V50.2275H18.5362ZM14.0363 19.4325C17.175 19.4325 19.1287 17.355 19.1287 14.7525C19.0725 12.0938 17.1788 10.0725 14.0963 10.0725C11.0138 10.0725 9 12.0975 9 14.7525C9 17.355 10.9537 19.4325 13.9762 19.4325H14.0363ZM32.4412 50.2275V35.0963C32.4412 34.2863 32.5013 33.4762 32.7412 32.8988C33.39 31.2825 34.8713 29.6063 37.3613 29.6063C40.62 29.6063 41.9212 32.0888 41.9212 35.7337V50.2275H50.925V34.6875C50.925 26.3625 46.485 22.4925 40.56 22.4925C35.7825 22.4925 33.6413 25.1175 32.4412 26.9662V27.06H32.3813C32.4012 27.0287 32.4212 26.9974 32.4412 26.9662V23.1338H23.4412C23.5537 25.6763 23.4412 50.2275 23.4412 50.2275H32.4412Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_196">
                                                <rect width="60" height="60" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div >
                                    LinkedIn
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10">
                        <div className="bg-zinc-950 border border-zinc-700 rounded-lg hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white w-52 h-52 ">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="m-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 60 60" fill="none">
                                        <path d="M30 0C21.8587 0 20.835 0.0375 17.6362 0.18C14.4375 0.33 12.2587 0.8325 10.35 1.575C8.34785 2.32807 6.53434 3.50935 5.03625 5.03625C3.51029 6.53511 2.32915 8.3484 1.575 10.35C0.8325 12.255 0.32625 14.4375 0.18 17.625C0.0375 20.8312 0 21.8513 0 30.0038C0 38.1488 0.0375 39.1688 0.18 42.3675C0.33 45.5625 0.8325 47.7412 1.575 49.65C2.34375 51.6225 3.3675 53.295 5.03625 54.9637C6.70125 56.6325 8.37375 57.66 10.3463 58.425C12.2587 59.1675 14.4338 59.6737 17.6287 59.82C20.8313 59.9625 21.8512 60 30 60C38.1488 60 39.165 59.9625 42.3675 59.82C45.5588 59.67 47.745 59.1675 49.6538 58.425C51.6546 57.6716 53.4668 56.4903 54.9637 54.9637C56.6325 53.295 57.6562 51.6225 58.425 49.65C59.1637 47.7412 59.67 45.5625 59.82 42.3675C59.9625 39.1688 60 38.1488 60 30C60 21.8512 59.9625 20.8313 59.82 17.6287C59.67 14.4375 59.1637 12.255 58.425 10.35C57.671 8.34834 56.4898 6.53503 54.9637 5.03625C53.4661 3.50878 51.6525 2.32742 49.65 1.575C47.7375 0.8325 45.555 0.32625 42.3638 0.18C39.1613 0.0375 38.145 0 29.9925 0H30.0038H30ZM27.3113 5.4075H30.0038C38.0138 5.4075 38.9625 5.43375 42.1237 5.58C45.0487 5.71125 46.6387 6.2025 47.6963 6.61125C49.095 7.155 50.0962 7.8075 51.1462 8.8575C52.1963 9.9075 52.845 10.905 53.3888 12.3075C53.8013 13.3612 54.2887 14.9513 54.42 17.8763C54.5662 21.0375 54.5962 21.9862 54.5962 29.9925C54.5962 37.9987 54.5662 38.9512 54.42 42.1125C54.2887 45.0375 53.7975 46.6237 53.3888 47.6813C52.9078 48.9838 52.1401 50.1616 51.1425 51.1275C50.0925 52.1775 49.095 52.8263 47.6925 53.37C46.6425 53.7825 45.0525 54.27 42.1237 54.405C38.9625 54.5475 38.0138 54.5813 30.0038 54.5813C21.9938 54.5813 21.0413 54.5475 17.88 54.405C14.955 54.27 13.3687 53.7825 12.3112 53.37C11.0081 52.8897 9.82922 52.1234 8.86125 51.1275C7.86282 50.1601 7.09396 48.9812 6.61125 47.6775C6.2025 46.6237 5.71125 45.0337 5.58 42.1087C5.4375 38.9475 5.4075 37.9987 5.4075 29.985C5.4075 21.975 5.4375 21.03 5.58 17.8687C5.715 14.9437 6.2025 13.3538 6.615 12.2963C7.15875 10.8975 7.81125 9.89625 8.86125 8.84625C9.91125 7.79625 10.9087 7.1475 12.3112 6.60375C13.3687 6.19125 14.955 5.70375 17.88 5.56875C20.6475 5.44125 21.72 5.40375 27.3113 5.4V5.4075ZM46.0163 10.3875C45.5435 10.3875 45.0754 10.4806 44.6386 10.6615C44.2018 10.8425 43.805 11.1076 43.4707 11.4419C43.1364 11.7762 42.8712 12.1731 42.6903 12.6098C42.5094 13.0466 42.4162 13.5147 42.4162 13.9875C42.4162 14.4603 42.5094 14.9284 42.6903 15.3652C42.8712 15.8019 43.1364 16.1988 43.4707 16.5331C43.805 16.8674 44.2018 17.1325 44.6386 17.3135C45.0754 17.4944 45.5435 17.5875 46.0163 17.5875C46.971 17.5875 47.8867 17.2082 48.5618 16.5331C49.237 15.858 49.6162 14.9423 49.6162 13.9875C49.6162 13.0327 49.237 12.117 48.5618 11.4419C47.8867 10.7668 46.971 10.3875 46.0163 10.3875ZM30.0038 14.595C27.9603 14.5631 25.9309 14.9381 24.0337 15.698C22.1365 16.458 20.4094 17.5878 18.9531 19.0216C17.4967 20.4554 16.3401 22.1646 15.5507 24.0497C14.7612 25.9348 14.3546 27.9581 14.3546 30.0019C14.3546 32.0456 14.7612 34.0689 15.5507 35.954C16.3401 37.8391 17.4967 39.5483 18.9531 40.9822C20.4094 42.416 22.1365 43.5458 24.0337 44.3057C25.9309 45.0657 27.9603 45.4406 30.0038 45.4088C34.0483 45.3456 37.9058 43.6947 40.7437 40.8122C43.5815 37.9297 45.1721 34.0469 45.1721 30.0019C45.1721 25.9569 43.5815 22.074 40.7437 19.1916C37.9058 16.3091 34.0483 14.6581 30.0038 14.595ZM30.0038 19.9988C32.6562 19.9988 35.2001 21.0525 37.0757 22.928C38.9513 24.8036 40.005 27.3475 40.005 30C40.005 32.6525 38.9513 35.1964 37.0757 37.072C35.2001 38.9475 32.6562 40.0013 30.0038 40.0013C27.3513 40.0013 24.8074 38.9475 22.9318 37.072C21.0562 35.1964 20.0025 32.6525 20.0025 30C20.0025 27.3475 21.0562 24.8036 22.9318 22.928C24.8074 21.0525 27.3513 19.9988 30.0038 19.9988Z" fill="white" />
                                    </svg>
                                </div>
                                <div >
                                    Instagram
                                </div>
                            </div>
                        </div>
                    </button>

                    <button className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10">
                        <div className="bg-zinc-950 border border-zinc-700 rounded-lg w-52 h-52 hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="m-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 53 60" fill="none">
                                        <path d="M30 0H37.425C37.965 2.68125 39.45 6.06375 42.0563 9.42C44.6063 12.7087 47.9888 15 52.5 15V22.5C45.9263 22.5 40.9875 19.4475 37.5 15.6412V41.25C37.5 44.9584 36.4003 48.5835 34.3401 51.6669C32.2798 54.7504 29.3514 57.1536 25.9253 58.5727C22.4992 59.9919 18.7292 60.3632 15.0921 59.6397C11.4549 58.9162 8.11399 57.1305 5.49176 54.5082C2.86952 51.886 1.08376 48.5451 0.360284 44.9079C-0.363188 41.2708 0.00812407 37.5008 1.42727 34.0747C2.84641 30.6486 5.24964 27.7202 8.33307 25.6599C11.4165 23.5997 15.0416 22.5 18.75 22.5V30C16.525 30 14.3499 30.6598 12.4998 31.896C10.6498 33.1321 9.20785 34.8891 8.35636 36.9448C7.50488 39.0005 7.28209 41.2625 7.71617 43.4448C8.15026 45.627 9.22171 47.6316 10.7951 49.2049C12.3684 50.7783 14.373 51.8497 16.5552 52.2838C18.7375 52.7179 20.9995 52.4951 23.0552 51.6436C25.1109 50.7922 26.8679 49.3502 28.104 47.5002C29.3402 45.6501 30 43.475 30 41.25V0Z" fill="white" />
                                    </svg>
                                </div>
                                <div >
                                    TikTok
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}