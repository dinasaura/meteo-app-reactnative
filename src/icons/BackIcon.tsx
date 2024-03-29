import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const BackIcon: React.FC = () => {
  return (
    <Svg width={42} height={42}>
      <Svg viewBox="0 0 24 24" width={42} height={42}>
        <G data-name="Layer 2" className="color000 svgShape">
          <Path
            d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1 1 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
            data-name="arrow-ios-back"
            fill="#0288D0"
          />
        </G>
      </Svg>
    </Svg>
  );
};

export default BackIcon;