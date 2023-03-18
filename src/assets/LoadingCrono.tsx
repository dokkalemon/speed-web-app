import { CSSProperties } from "react";

const LoadingCrono = ({
  width = 50,
  style,
}: {
  width?: number;
  style?: CSSProperties;
}) => {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 123.65 129.58"
        width={width}
      >
        <g id="Livello_2" data-name="Livello 2">
          <g
            id="Livello_1-2"
            data-name="Livello 1"
          >
            <path
              fill="#ffffff"
              d="M61.83,5.92a61.83,61.83,0,1,0,61.82,61.83A61.83,61.83,0,0,0,61.83,5.92Zm0,117.25a55.42,55.42,0,1,1,55.41-55.42A55.42,55.42,0,0,1,61.83,123.17Z"
            />
            <path
              fill="#ffffff"
              d="M65.82,4.36c1.75-.44,2.9-1.15,2.9-2,0-1.32-3.09-2.4-6.89-2.4s-6.9,1.08-6.9,2.4c0,.8,1.11,1.5,2.82,1.93V5.92h8.07Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LoadingCrono;
