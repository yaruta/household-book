/**
 * AvatarIcon component.
 * This component renders a user avatar icon as an SVG inside a div container.
 * @module AvatarIcon
 * @param {Object} props - The component props.
 * @param {number} props.size - The size of the avatar in pixels.
 * @returns {JSX.Element} The avatar icon component.
*/
function AvatarIcon({ size }) {
  return (
    <div
      className={`w-[${size}px] h-[${size}px] flex justify-center items-center`}
    >
      <svg
        id="fi_17932540"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        data-name="Layer 1"
        width={size - 20}
        height={size - 20}
      >
        <clipPath id="clippath">
          <circle cx="12" cy="12" r="10"></circle>
        </clipPath>
        <g clipPath="url(#clippath)">
          <circle cx="12" cy="12" fill="#556080" r="10"></circle>
          <path
            d="m19 19s-.01-.01-.01-.01c-.47-.6-1.11-1.04-1.82-1.32l-2.28-.92c-.21-.09-.43-.17-.64-.26v-2.58c.19-.33.34-.67.46-1.02.17 0 .28-.06.35-.11.31-.23.09-.64.43-1.35.04-.09.12-.23.12-.43 0-.06 0-.37-.17-.52-.05-.04-.12-.07-.19-.09.06-.29.1-.55.12-.77.11-.9.03-1.26-.2-1.46-.11-.09-.22-.14-.31-.16-.07-.34-.26-.96-.8-1.43-1.29-1.13-3.26-.25-3.4-.19-1.09.5-1.93 1.55-2.07 2.62-.04.31-.02.61 0 .9.01.17.03.33.06.49-.08.01-.15.04-.2.09-.18.16-.18.46-.17.52 0 .2.08.34.12.43.34.71.12 1.12.43 1.35.07.05.19.11.39.11.13.41.3.81.54 1.18v2.41l-.64.26-2.28.92c-.7.28-1.35.72-1.82 1.32 0 0 0 0-.01.01-.42.54-.82 1.43-1 3h16c-.18-1.57-.58-2.46-1-3z"
            fill="#f2f2f2"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default AvatarIcon;
