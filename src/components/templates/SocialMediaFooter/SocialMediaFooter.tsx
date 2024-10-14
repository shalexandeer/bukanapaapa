const SocialMediaFooter = () => {
  return (
    <div className="container-layout flex flex-col items-center justify-between py-10 md:flex-row lg:py-20">
      <div className="flex w-full flex-col items-start gap-1">
        <h1 className="self-stretch text-2xl font-bold leading-[140%] text-white sm:text-3xl">
          Follow us on
        </h1>
        <p className="self-stretch text-sm leading-[150%] text-[#c0c6d6] sm:text-base">
          Dapatkan informasi menarik lainnya di sosial media SEAL Indopride
        </p>
      </div>
      <div className="mt-4 flex gap-6">
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.6414 10.8C35.6414 10.8 35.2898 8.31792 34.207 7.22808C32.8359 5.7937 31.3031 5.78667 30.6 5.70229C25.5656 5.33667 18.007 5.33667 18.007 5.33667H17.993C17.993 5.33667 10.4344 5.33667 5.4 5.70229C4.69688 5.78667 3.16406 5.7937 1.79297 7.22808C0.710156 8.31792 0.365625 10.8 0.365625 10.8C0.365625 10.8 0 13.7179 0 16.6289V19.357C0 22.2679 0.358594 25.1859 0.358594 25.1859C0.358594 25.1859 0.710156 27.6679 1.78594 28.7578C3.15703 30.1921 4.95703 30.1429 5.75859 30.2976C8.64141 30.5718 18 30.6562 18 30.6562C18 30.6562 25.5656 30.6421 30.6 30.2835C31.3031 30.1992 32.8359 30.1921 34.207 28.7578C35.2898 27.6679 35.6414 25.1859 35.6414 25.1859C35.6414 25.1859 36 22.275 36 19.357V16.6289C36 13.7179 35.6414 10.8 35.6414 10.8ZM14.2805 22.6687V12.5507L24.0047 17.6273L14.2805 22.6687Z"
            fill="white"
          />
        </svg>
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_78_1874)">
            <path
              d="M18 3.24141C22.8094 3.24141 23.3789 3.2625 25.2703 3.34687C27.0281 3.42422 27.9773 3.71953 28.6102 3.96563C29.4469 4.28906 30.0516 4.68281 30.6773 5.30859C31.3102 5.94141 31.6969 6.53906 32.0203 7.37578C32.2664 8.00859 32.5617 8.96484 32.6391 10.7156C32.7234 12.6141 32.7445 13.1836 32.7445 17.9859C32.7445 22.7953 32.7234 23.3648 32.6391 25.2563C32.5617 27.0141 32.2664 27.9633 32.0203 28.5961C31.6969 29.4328 31.3031 30.0375 30.6773 30.6633C30.0445 31.2961 29.4469 31.6828 28.6102 32.0062C27.9773 32.2523 27.0211 32.5477 25.2703 32.625C23.3719 32.7094 22.8023 32.7305 18 32.7305C13.1906 32.7305 12.6211 32.7094 10.7297 32.625C8.97188 32.5477 8.02266 32.2523 7.38984 32.0062C6.55313 31.6828 5.94844 31.2891 5.32266 30.6633C4.68984 30.0305 4.30312 29.4328 3.97969 28.5961C3.73359 27.9633 3.43828 27.007 3.36094 25.2563C3.27656 23.3578 3.25547 22.7883 3.25547 17.9859C3.25547 13.1766 3.27656 12.607 3.36094 10.7156C3.43828 8.95781 3.73359 8.00859 3.97969 7.37578C4.30312 6.53906 4.69688 5.93437 5.32266 5.30859C5.95547 4.67578 6.55313 4.28906 7.38984 3.96563C8.02266 3.71953 8.97891 3.42422 10.7297 3.34687C12.6211 3.2625 13.1906 3.24141 18 3.24141ZM18 0C13.1133 0 12.5016 0.0210937 10.582 0.105469C8.66953 0.189844 7.35469 0.499219 6.21563 0.942187C5.02734 1.40625 4.02188 2.01797 3.02344 3.02344C2.01797 4.02187 1.40625 5.02734 0.942188 6.20859C0.499219 7.35469 0.189844 8.6625 0.105469 10.575C0.0210938 12.5016 0 13.1133 0 18C0 22.8867 0.0210938 23.4984 0.105469 25.418C0.189844 27.3305 0.499219 28.6453 0.942188 29.7844C1.40625 30.9727 2.01797 31.9781 3.02344 32.9766C4.02188 33.975 5.02734 34.5937 6.20859 35.0508C7.35469 35.4937 8.6625 35.8031 10.575 35.8875C12.4945 35.9719 13.1062 35.993 17.993 35.993C22.8797 35.993 23.4914 35.9719 25.4109 35.8875C27.3234 35.8031 28.6383 35.4937 29.7773 35.0508C30.9586 34.5937 31.9641 33.975 32.9625 32.9766C33.9609 31.9781 34.5797 30.9727 35.0367 29.7914C35.4797 28.6453 35.7891 27.3375 35.8734 25.425C35.9578 23.5055 35.9789 22.8937 35.9789 18.007C35.9789 13.1203 35.9578 12.5086 35.8734 10.5891C35.7891 8.67656 35.4797 7.36172 35.0367 6.22266C34.5938 5.02734 33.982 4.02187 32.9766 3.02344C31.9781 2.025 30.9727 1.40625 29.7914 0.949219C28.6453 0.50625 27.3375 0.196875 25.425 0.1125C23.4984 0.0210938 22.8867 0 18 0Z"
              fill="white"
            />
            <path
              d="M18 8.75391C12.8953 8.75391 8.75391 12.8953 8.75391 18C8.75391 23.1047 12.8953 27.2461 18 27.2461C23.1047 27.2461 27.2461 23.1047 27.2461 18C27.2461 12.8953 23.1047 8.75391 18 8.75391ZM18 23.9977C14.6883 23.9977 12.0023 21.3117 12.0023 18C12.0023 14.6883 14.6883 12.0023 18 12.0023C21.3117 12.0023 23.9977 14.6883 23.9977 18C23.9977 21.3117 21.3117 23.9977 18 23.9977Z"
              fill="white"
            />
            <path
              d="M29.7703 8.38833C29.7703 9.58365 28.8 10.5469 27.6117 10.5469C26.4164 10.5469 25.4531 9.57662 25.4531 8.38833C25.4531 7.19302 26.4234 6.22974 27.6117 6.22974C28.8 6.22974 29.7703 7.20005 29.7703 8.38833Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_1874">
              <rect width={36} height={36} fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4894 2.85596H32.5496L21.4946 15.4912L34.5 32.6849H24.3169L16.3411 22.257L7.21492 32.6849H2.15165L13.9762 19.1701L1.5 2.85596H11.9417L19.1511 12.3875L27.4894 2.85596ZM25.7135 29.6561H28.5174L10.4181 5.72566H7.40919L25.7135 29.6561Z"
            fill="white"
          />
        </svg>
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.4755 6.23336C28.181 5.18054 25.7205 4.40486 23.1478 3.9606C23.101 3.95203 23.0542 3.97346 23.0301 4.01631C22.7136 4.57913 22.3631 5.31338 22.1176 5.8905C19.3506 5.47624 16.5978 5.47624 13.8875 5.8905C13.642 5.30055 13.2787 4.57913 12.9609 4.01631C12.9367 3.97489 12.8899 3.95346 12.8431 3.9606C10.2719 4.40344 7.81134 5.17912 5.5154 6.23336C5.49553 6.24193 5.47849 6.25623 5.46718 6.27479C0.800088 13.2473 -0.478425 20.0485 0.14877 26.7653C0.151608 26.7982 0.170055 26.8296 0.195597 26.8496C3.27481 29.1109 6.25756 30.4837 9.18492 31.3937C9.23177 31.408 9.28141 31.3908 9.31122 31.3522C10.0037 30.4066 10.621 29.4095 11.1502 28.3609C11.1814 28.2995 11.1516 28.2267 11.0878 28.2024C10.1087 27.831 9.1764 27.3781 8.27959 26.8639C8.20866 26.8225 8.20298 26.721 8.26824 26.6724C8.45696 26.531 8.64573 26.3839 8.82593 26.2353C8.85853 26.2082 8.90397 26.2025 8.9423 26.2196C14.8339 28.9095 21.2123 28.9095 27.0344 26.2196C27.0728 26.201 27.1182 26.2068 27.1522 26.2339C27.3325 26.3825 27.5212 26.531 27.7113 26.6724C27.7766 26.721 27.7723 26.8225 27.7014 26.8639C26.8046 27.3881 25.8723 27.831 24.8918 28.201C24.8279 28.2253 24.7995 28.2995 24.8308 28.3609C25.3714 29.408 25.9887 30.4051 26.6683 31.3508C26.6967 31.3908 26.7478 31.408 26.7946 31.3937C29.7362 30.4837 32.7189 29.1109 35.7981 26.8496C35.8251 26.8296 35.8422 26.7996 35.845 26.7667C36.5956 19.0013 34.5877 12.256 30.5223 6.27621C30.5124 6.25623 30.4954 6.24193 30.4755 6.23336ZM12.03 22.6755C10.2562 22.6755 8.7947 21.047 8.7947 19.0471C8.7947 17.0472 10.2279 15.4187 12.03 15.4187C13.8463 15.4187 15.2937 17.0615 15.2653 19.0471C15.2653 21.047 13.8321 22.6755 12.03 22.6755ZM23.9921 22.6755C22.2184 22.6755 20.7568 21.047 20.7568 19.0471C20.7568 17.0472 22.19 15.4187 23.9921 15.4187C25.8084 15.4187 27.2558 17.0615 27.2275 19.0471C27.2275 21.047 25.8084 22.6755 23.9921 22.6755Z"
            fill="white"
          />
        </svg>
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6088 0H19.5417V24.5217C19.5417 27.4435 17.2083 29.8435 14.3044 29.8435C11.4005 29.8435 9.06703 27.4435 9.06703 24.5217C9.06703 21.6522 11.3487 19.3043 14.1489 19.2V13.0435C7.97808 13.1478 3 18.2087 3 24.5217C3 30.887 8.08178 36 14.3563 36C20.6307 36 25.7124 30.8348 25.7124 24.5217V11.9478C27.9941 13.6174 30.7942 14.6087 33.75 14.6609V8.50435C29.1868 8.34783 25.6088 4.5913 25.6088 0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default SocialMediaFooter;
