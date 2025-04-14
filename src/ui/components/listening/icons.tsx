import type { SvgProps } from "react-native-svg";
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";

interface EnhancedSvgProps extends SvgProps {
  isPlaying: boolean;
}

export const FemaleEnglishAudioPlayedIcon = (props: EnhancedSvgProps) => (
  <Svg width={41} height={41} fill="none" {...props}>
    <Circle
      cx={20.529}
      cy={20.468}
      r={20}
      fill={props.isPlaying ? "#D9D9D9" : "#FBD65B"}
    />
    <Path
      d="M25.462 25.968c.356-.09 1.173-.434 1.593-1.085.42-.651.374-1.502.299-1.845M26.07 28.598c.746-.191 2.46-.915 3.344-2.283.883-1.368.788-3.154.63-3.876M26.463 31.169c1.137-.29 3.747-1.392 5.092-3.475 1.344-2.083 1.2-4.8.959-5.9"
      stroke={"#2F2F38"}
      strokeLinecap="round"
    />
    <G clipPath="url(#a)">
      <Path
        d="M24.461 21.875a.568.568 0 0 0-.552.567v.424a.14.14 0 0 1-.072.122l-.243.135a.145.145 0 0 0-.037.22l.222.253a.141.141 0 0 1-.007.194l-.324.333a.145.145 0 0 0-.017.17c.15.25.22.515.22.77 0 .876-.788 1.658-1.777 1.507l-2.24-.344-.026.276a2 2 0 0 1-1.991 1.815h-3.83c-1.29 0-2.23-1.208-2.153-2.496.03-.503.037-1.033.03-1.64-.009-.555-.18-.662-.933-1.707-8.8-12.2 9.005-18.834 13.032-8.11.318.845.282 1.724.06 2.58-.17.658-.12 1.37.265 1.93l1.098 1.598a.9.9 0 0 1-.725 1.403Z"
        fill="#FAFAFA"
        stroke={"#2F2F38"}
      />
      <Path
        d="M12.96 20.143a.667.667 0 0 1-.46-.18.614.614 0 0 1-.2-.48c0-.067.014-.154.04-.26l2.5-6.78a1.092 1.092 0 0 1 1.62-.52c.2.12.347.293.44.52l2.66 6.78c.027.107.04.193.04.26 0 .2-.066.36-.2.48a.667.667 0 0 1-.46.18.852.852 0 0 1-.38-.1.572.572 0 0 1-.28-.28l-.66-1.76c-.013-.08-.066-.12-.16-.12H14.4c-.093 0-.153.04-.18.12l-.6 1.76a.56.56 0 0 1-.3.28c-.12.067-.24.1-.36.1Zm2.04-3.46h1.8c.08 0 .14-.027.18-.08a.252.252 0 0 0 .04-.24l-.96-2.74c-.04-.133-.1-.2-.18-.2-.093 0-.16.066-.2.2l-.9 2.76a.253.253 0 0 0 .02.22c.054.053.12.08.2.08Z"
        fill={"#2F2F38"}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(6.53 8.468)"
          d="M0 0h20.602v20.358H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const FemaleNativeAudioPlayedIcon = (props: EnhancedSvgProps) => (
  <Svg width={41} height={41} fill="none" {...props}>
    <Circle
      cx={20.025}
      cy={20.468}
      r={20}
      fill={props.isPlaying ? "#E8E6E7" : "#FAE8AB"}
    />
    <Path
      d="M24.954 25.966c.356-.09 1.173-.434 1.593-1.085.42-.651.374-1.502.299-1.845M25.562 28.595c.747-.19 2.461-.914 3.344-2.282.884-1.368.788-3.153.63-3.875M25.955 31.166c1.137-.29 3.747-1.391 5.091-3.474 1.345-2.083 1.2-4.8.959-5.9"
      stroke="#2F2F38"
      strokeLinecap="round"
    />
    <G clipPath="url(#a)" stroke="#2F2F38">
      <Path
        d="M23.955 21.874a.568.568 0 0 0-.552.567v.423a.14.14 0 0 1-.072.123l-.244.135a.144.144 0 0 0-.037.22l.222.253a.141.141 0 0 1-.006.193l-.324.333a.145.145 0 0 0-.018.17c.15.251.22.516.22.771 0 .875-.787 1.657-1.777 1.507l-2.24-.344-.025.275a2 2 0 0 1-1.991 1.815h-3.829c-1.29 0-2.23-1.208-2.154-2.496.03-.502.037-1.033.03-1.64-.008-.554-.18-.662-.932-1.706-8.8-12.2 9.004-18.833 13.03-8.109.319.844.283 1.723.06 2.579-.17.658-.12 1.37.265 1.93l1.098 1.598a.9.9 0 0 1-.724 1.403Z"
        fill={props.isPlaying ? "#E8E6E7" : "#FBD65B"}
      />
      <Path
        d="M15.476 10.787a5.63 5.63 0 0 0-1.228.136 5.546 5.546 0 0 0-2.924 1.709 5.344 5.344 0 0 0 .537 7.642c2.203 1.881 5.518 1.756 7.566-.286A5.347 5.347 0 0 0 21 16.203c0-2.991-2.473-5.416-5.524-5.416Zm-3.704 1.902.09-.087.103-.098c.03-.028.062-.055.094-.083.035-.03.07-.062.107-.091.032-.027.065-.052.098-.078a3.24 3.24 0 0 1 .213-.158 5.084 5.084 0 0 1 .921-.515l.131-.054c.038-.016.076-.03.115-.045.044-.017.09-.032.134-.048a5.63 5.63 0 0 1 .255-.08l.116-.032.045-.01a4.468 4.468 0 0 0-1.177 1.873 6.259 6.259 0 0 1-1.261-.476l.016-.018Zm-.264.29c.442.235.91.418 1.397.546a9.202 9.202 0 0 0-.372 2.498h-2.207a4.988 4.988 0 0 1 1.182-3.044Zm0 6.448a4.989 4.989 0 0 1-1.182-3.043h2.207c.008.845.134 1.685.372 2.498-.486.127-.955.31-1.397.545Zm2.64 1.66c-.037-.009-.075-.02-.114-.032-.046-.013-.093-.026-.14-.041l-.115-.039a4.516 4.516 0 0 1-.493-.196 8.245 8.245 0 0 1-.239-.117 5.338 5.338 0 0 1-.572-.35 4.793 4.793 0 0 1-.213-.159l-.098-.076-.108-.093-.093-.082c-.035-.032-.07-.065-.103-.098l-.09-.086-.015-.017a6.245 6.245 0 0 1 1.261-.477c.228.711.632 1.355 1.177 1.874l-.045-.01Zm1.144.157c-.787-.11-1.478-.916-1.912-2.107a9.538 9.538 0 0 1 1.912-.22v2.327Zm0-2.688a9.87 9.87 0 0 0-2.028.237 8.871 8.871 0 0 1-.363-2.41h2.391v2.173Zm0-2.533h-2.39a8.87 8.87 0 0 1 .362-2.41 9.885 9.885 0 0 0 2.028.238v2.172Zm0-2.533a9.523 9.523 0 0 1-1.912-.221c.434-1.19 1.125-1.997 1.912-2.107v2.328Zm4.153-.51a4.989 4.989 0 0 1 1.183 3.043H18.42a9.202 9.202 0 0 0-.372-2.498c.486-.128.955-.31 1.398-.546Zm-2.642-1.661.116.032a4.973 4.973 0 0 1 .504.172l.132.055a5.327 5.327 0 0 1 .24.11l.111.057.124.067a4.753 4.753 0 0 1 .448.282c.034.023.068.047.101.072l.113.086c.032.026.065.05.097.077l.108.092.093.083.104.098c.03.029.06.057.088.086l.016.017a6.248 6.248 0 0 1-1.261.477 4.468 4.468 0 0 0-1.178-1.874l.044.01Zm-1.142-.157c.787.11 1.478.916 1.913 2.107a9.53 9.53 0 0 1-1.913.22v-2.327Zm0 2.689a9.88 9.88 0 0 0 2.028-.238c.231.784.353 1.594.363 2.41H15.66V13.85Zm0 2.533h2.39a8.871 8.871 0 0 1-.362 2.409 9.88 9.88 0 0 0-2.028-.237v-2.172Zm0 4.86v-2.327a9.523 9.523 0 0 1 1.913.22c-.435 1.191-1.126 1.998-1.913 2.107Zm3.52-1.526-.089.086-.104.099c-.03.028-.062.054-.093.082-.036.03-.071.062-.108.092l-.098.077a3.752 3.752 0 0 1-.213.158l-.115.08a4.36 4.36 0 0 1-.224.139l-.109.062a5.415 5.415 0 0 1-.473.234l-.131.054a5.507 5.507 0 0 1-.365.132 4.067 4.067 0 0 1-.255.073l-.045.011a4.468 4.468 0 0 0 1.177-1.874c.437.113.86.273 1.261.476l-.016.019Zm.264-.291a6.467 6.467 0 0 0-1.397-.545 9.202 9.202 0 0 0 .372-2.498h2.207a4.988 4.988 0 0 1-1.181 3.043Z"
        fill="#2F2F38"
        strokeWidth={0.4}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(6.025 8.468)"
          d="M0 0h20.6v20.356H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const MaleEnglishAudioPlayedIcon = (props: EnhancedSvgProps) => (
  <Svg width={41} height={41} fill="none" {...props}>
    <Circle
      cx={20.313}
      cy={20.391}
      r={20}
      fill={props.isPlaying ? "#D9D9D9" : "#F69F4E"}
    />
    <Path
      d="M25.245 25.89c.356-.09 1.173-.433 1.593-1.085.42-.65.374-1.501.299-1.845M25.852 28.52c.747-.19 2.462-.914 3.345-2.283.884-1.368.788-3.153.63-3.875M26.246 31.091c1.137-.29 3.747-1.391 5.092-3.474 1.345-2.083 1.2-4.802.959-5.9"
      stroke="#2F2F38"
      strokeLinecap="round"
    />
    <G clipPath="url(#a)">
      <Path
        d="M24.244 21.797a.568.568 0 0 0-.552.568v.423a.14.14 0 0 1-.072.122l-.243.136a.145.145 0 0 0-.037.219l.222.254a.141.141 0 0 1-.007.193l-.324.333a.145.145 0 0 0-.017.17c.15.251.22.515.22.771 0 .875-.788 1.657-1.777 1.507l-2.24-.344-.026.275A2 2 0 0 1 17.4 28.24h-3.83c-1.29 0-2.23-1.209-2.153-2.497.03-.502.037-1.033.03-1.64-.008-.554-.18-.662-.933-1.706-8.8-12.201 9.005-18.835 13.033-8.11.318.844.281 1.723.06 2.579-.171.658-.121 1.37.264 1.93l1.098 1.598a.9.9 0 0 1-.725 1.403Z"
        fill="#FAFAFA"
        stroke="#2F2F38"
      />
      <Path
        d="M12.744 20.065a.667.667 0 0 1-.46-.18.614.614 0 0 1-.2-.48c0-.066.013-.153.04-.26l2.5-6.78a1.092 1.092 0 0 1 1.62-.52c.2.12.346.294.44.52l2.66 6.78c.026.107.04.194.04.26 0 .2-.067.36-.2.48a.667.667 0 0 1-.46.18.85.85 0 0 1-.38-.1.571.571 0 0 1-.28-.28l-.66-1.76c-.014-.08-.067-.12-.16-.12h-3.06c-.094 0-.154.04-.18.12l-.6 1.76a.56.56 0 0 1-.3.28c-.12.067-.24.1-.36.1Zm2.04-3.46h1.8c.08 0 .14-.026.18-.08.053-.066.066-.146.04-.24l-.96-2.74c-.04-.133-.1-.2-.18-.2-.094 0-.16.067-.2.2l-.9 2.76a.253.253 0 0 0 .02.22c.053.054.12.08.2.08Z"
        fill="#2F2F38"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(6.313 8.39)"
          d="M0 0h20.602v20.358H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const MaleNativeAudioPlayedIcon = (props: EnhancedSvgProps) => (
  <Svg width={41} height={41} fill="none" {...props}>
    <Circle
      cx={20.809}
      cy={20.391}
      r={20}
      fill={props.isPlaying ? "#E8E6E7" : "#FAE7D6"}
    />
    <Path
      d="M25.737 25.889c.356-.09 1.173-.434 1.594-1.086.42-.65.374-1.501.298-1.845M26.345 28.518c.747-.19 2.461-.914 3.345-2.282.883-1.369.787-3.154.63-3.876M26.738 31.088c1.137-.29 3.747-1.39 5.091-3.474 1.345-2.083 1.2-4.8.96-5.9"
      stroke="#2F2F38"
      strokeLinecap="round"
    />
    <G clipPath="url(#a)" stroke="#2F2F38">
      <Path
        d="M24.738 21.796a.568.568 0 0 0-.552.568v.423a.14.14 0 0 1-.072.122l-.244.135a.145.145 0 0 0-.036.22l.221.253a.141.141 0 0 1-.006.194l-.324.333a.145.145 0 0 0-.018.17c.15.25.22.515.22.77 0 .875-.787 1.657-1.776 1.507l-2.24-.344-.025.275a2 2 0 0 1-1.992 1.816h-3.828c-1.291 0-2.23-1.209-2.154-2.497.03-.502.036-1.032.03-1.64-.009-.554-.18-.661-.933-1.706-8.8-12.2 9.004-18.833 13.031-8.108.318.843.282 1.723.06 2.578-.17.658-.12 1.37.264 1.93l1.098 1.598a.9.9 0 0 1-.724 1.403Z"
        fill={props.isPlaying ? "#E8E6E7" : "#F69F4E"}
      />
      <Path
        d="M16.26 10.709a5.63 5.63 0 0 0-1.228.137 5.547 5.547 0 0 0-2.924 1.708 5.344 5.344 0 0 0 .537 7.643c2.202 1.88 5.517 1.755 7.565-.286a5.347 5.347 0 0 0 1.573-3.785c0-2.992-2.473-5.417-5.523-5.417Zm-3.705 1.902.09-.087.103-.098c.03-.028.062-.055.094-.082.035-.031.07-.062.107-.092.032-.027.065-.052.098-.078a4.502 4.502 0 0 1 .213-.157c.038-.027.077-.055.115-.08a5.084 5.084 0 0 1 .806-.436 29.18 29.18 0 0 1 .246-.099 5.51 5.51 0 0 1 .39-.127c.038-.011.076-.023.115-.033l.045-.01a4.466 4.466 0 0 0-1.177 1.873 6.259 6.259 0 0 1-1.261-.476l.017-.018Zm-.264.29c.442.236.911.419 1.397.546a9.202 9.202 0 0 0-.372 2.498H11.11a4.988 4.988 0 0 1 1.182-3.043Zm0 6.448a4.989 4.989 0 0 1-1.182-3.043h2.207c.009.845.134 1.686.372 2.498-.486.127-.955.31-1.397.545Zm2.64 1.66a5.075 5.075 0 0 1-.253-.073l-.115-.038a4.518 4.518 0 0 1-.25-.093l-.131-.054a4.314 4.314 0 0 1-.241-.111 3.362 3.362 0 0 1-.235-.123 3.709 3.709 0 0 1-.227-.135 4.393 4.393 0 0 1-.221-.147l-.1-.072a4.306 4.306 0 0 1-.21-.164c-.037-.03-.073-.061-.108-.092l-.094-.082c-.035-.032-.069-.066-.103-.099l-.09-.086-.015-.017a6.257 6.257 0 0 1 1.262-.476c.227.71.631 1.355 1.176 1.873l-.045-.01Zm1.145.158c-.788-.11-1.479-.916-1.913-2.107a9.53 9.53 0 0 1 1.913-.22v2.327Zm0-2.689a9.878 9.878 0 0 0-2.029.237 8.87 8.87 0 0 1-.363-2.409h2.392v2.172Zm0-2.533h-2.392a8.87 8.87 0 0 1 .363-2.41 9.878 9.878 0 0 0 2.029.238v2.172Zm0-2.533a9.523 9.523 0 0 1-1.913-.22c.434-1.191 1.125-1.998 1.913-2.108v2.328Zm4.153-.51a4.989 4.989 0 0 1 1.182 3.043h-2.208a9.202 9.202 0 0 0-.372-2.498c.486-.127.955-.31 1.398-.545Zm-2.642-1.66a4.973 4.973 0 0 1 .255.074 4.626 4.626 0 0 1 .365.13l.13.054a4.464 4.464 0 0 1 .242.111 3.362 3.362 0 0 1 .234.123 3.58 3.58 0 0 1 .228.135 4.393 4.393 0 0 1 .434.306c.032.025.065.05.097.077.037.03.072.06.108.092.031.027.063.054.093.082l.104.098.089.087.015.017a6.26 6.26 0 0 1-1.261.476 4.468 4.468 0 0 0-1.178-1.874l.045.011Zm-1.143-.158c.788.11 1.478.917 1.913 2.107a9.537 9.537 0 0 1-1.913.221v-2.328Zm0 2.69a9.88 9.88 0 0 0 2.029-.238c.23.783.353 1.594.362 2.409h-2.391v-2.172Zm0 2.532h2.391a8.87 8.87 0 0 1-.363 2.41 9.88 9.88 0 0 0-2.028-.238v-2.172Zm0 4.86V18.84a9.523 9.523 0 0 1 1.913.22c-.435 1.192-1.125 1.998-1.913 2.108Zm3.52-1.526-.089.087-.103.098-.094.082c-.036.031-.071.062-.108.092l-.097.078a4.703 4.703 0 0 1-.214.158c-.038.026-.076.054-.115.079a4.36 4.36 0 0 1-.224.14l-.109.061a4.864 4.864 0 0 1-.604.289l-.114.045a4.723 4.723 0 0 1-.39.127 4.833 4.833 0 0 1-.116.033l-.045.01a4.467 4.467 0 0 0 1.177-1.873c.437.113.86.272 1.261.476-.006.006-.01.013-.016.018Zm.265-.29a6.466 6.466 0 0 0-1.398-.546 9.202 9.202 0 0 0 .372-2.498h2.208a4.987 4.987 0 0 1-1.182 3.043Z"
        fill="#2F2F38"
        strokeWidth={0.4}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(6.809 8.39)"
          d="M0 0h20.6v20.356H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
