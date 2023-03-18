import { CSSProperties } from "react";

const LoadingHand = ({
  width = 15,
  style,
}: {
  width?: number;
  style?: CSSProperties;
}) => {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30.09 26.05"
        width={width}
      >
        <g id="Livello_2" data-name="Livello 2">
          <g
            id="Livello_1-2"
            data-name="Livello 1"
          >
            <path
              fill="#ffffff"
              d="M24.42,14.71a5.64,5.64,0,0,0-2.52.6L0,0,18.84,19.41a6.25,6.25,0,0,0-.09,1,5.67,5.67,0,1,0,5.67-5.67Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LoadingHand;
