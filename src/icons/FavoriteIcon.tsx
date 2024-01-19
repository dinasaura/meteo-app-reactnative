import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoriteIcon: React.FC<{color: string}> = ({color}) => {
  return (
    <Svg width={35} height={35} viewBox="0 0 35 35" fill="none">
      <Path
        d="M17.5 25.915l9.013 5.44-2.392-10.253 7.962-6.898-10.485-.89L17.5 3.647l-4.098 9.669-10.485.89 7.962 6.897-2.391 10.252 9.012-5.44z"
        fill={color || '#0288D0'}
        fillOpacity={0.38}
      />
    </Svg>
  );
};

export default FavoriteIcon;