import { FC } from "react";
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

type Props = {
  size?: 'S' | 'M' | 'L';
  theme?: 'LIGHT' | 'DARK';
  color?: string;
  localStyles?: CSSObject;
}

const El = styled.svg(({localStyles}: Props) => ({
  ...(localStyles)
}));

export const Menu: FC<Props> = ({ color = 'white', theme = 'LIGHT', size = "S", localStyles }) => {
  return (
    <>
      {size === "S" && 
        <El
          localStyles={localStyles}
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="none"
          viewBox="0 0 17 17"
          >
          {theme === 'LIGHT' && <path fill="var(--light-1000)" d="M2.01597 4.09937C1.44089 4.09937 1 3.69775 1 3.1936C1 2.68091 1.45048 2.28784 2.01597 2.28784H14.984C15.5495 2.28784 16 2.68945 16 3.1936C16 3.69775 15.5495 4.09937 14.984 4.09937H2.01597ZM2.01597 9.40576C1.44089 9.40576 1 9.00415 1 8.5C1 7.99585 1.45048 7.59424 2.01597 7.59424H14.984C15.5495 7.59424 16 7.99585 16 8.5C16 9.0127 15.5495 9.40576 14.984 9.40576H2.01597ZM2.01597 14.7122C1.44089 14.7122 1 14.3105 1 13.8064C1 13.3022 1.45048 12.9092 2.01597 12.9092H14.984C15.5495 12.9092 16 13.3022 16 13.8064C16 14.3191 15.5495 14.7122 14.984 14.7122H2.01597Z" />}
          {theme === 'DARK' && <path fill="var(--dark-1000)" d="M2.01597 4.09937C1.44089 4.09937 1 3.69775 1 3.1936C1 2.68091 1.45048 2.28784 2.01597 2.28784H14.984C15.5495 2.28784 16 2.68945 16 3.1936C16 3.69775 15.5495 4.09937 14.984 4.09937H2.01597ZM2.01597 9.40576C1.44089 9.40576 1 9.00415 1 8.5C1 7.99585 1.45048 7.59424 2.01597 7.59424H14.984C15.5495 7.59424 16 7.99585 16 8.5C16 9.0127 15.5495 9.40576 14.984 9.40576H2.01597ZM2.01597 14.7122C1.44089 14.7122 1 14.3105 1 13.8064C1 13.3022 1.45048 12.9092 2.01597 12.9092H14.984C15.5495 12.9092 16 13.3022 16 13.8064C16 14.3191 15.5495 14.7122 14.984 14.7122H2.01597Z" />}
        </El>
      }
      {size === "M" && 
        <El
          localStyles={localStyles}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="none"
          viewBox="0 0 19 19"
        >
        {theme === 'LIGHT' && <path fill="var(--light-1000)" d="M2.58371 4.90189C1.97029 4.90189 1.5 4.48225 1.5 3.95546C1.5 3.41975 1.98051 3.00903 2.58371 3.00903H16.4163C17.0195 3.00903 17.5 3.42868 17.5 3.95546C17.5 4.48225 17.0195 4.90189 16.4163 4.90189H2.58371ZM2.58371 10.4465C1.97029 10.4465 1.5 10.0269 1.5 9.5001C1.5 8.97332 1.98051 8.55368 2.58371 8.55368H16.4163C17.0195 8.55368 17.5 8.97332 17.5 9.5001C17.5 10.0358 17.0195 10.4465 16.4163 10.4465H2.58371ZM2.58371 15.9912C1.97029 15.9912 1.5 15.5715 1.5 15.0447C1.5 14.518 1.98051 14.1072 2.58371 14.1072H16.4163C17.0195 14.1072 17.5 14.518 17.5 15.0447C17.5 15.5805 17.0195 15.9912 16.4163 15.9912H2.58371Z" />}
        {theme === 'DARK' && <path fill="var(--dark-1000)" d="M2.58371 4.90189C1.97029 4.90189 1.5 4.48225 1.5 3.95546C1.5 3.41975 1.98051 3.00903 2.58371 3.00903H16.4163C17.0195 3.00903 17.5 3.42868 17.5 3.95546C17.5 4.48225 17.0195 4.90189 16.4163 4.90189H2.58371ZM2.58371 10.4465C1.97029 10.4465 1.5 10.0269 1.5 9.5001C1.5 8.97332 1.98051 8.55368 2.58371 8.55368H16.4163C17.0195 8.55368 17.5 8.97332 17.5 9.5001C17.5 10.0358 17.0195 10.4465 16.4163 10.4465H2.58371ZM2.58371 15.9912C1.97029 15.9912 1.5 15.5715 1.5 15.0447C1.5 14.518 1.98051 14.1072 2.58371 14.1072H16.4163C17.0195 14.1072 17.5 14.518 17.5 15.0447C17.5 15.5805 17.0195 15.9912 16.4163 15.9912H2.58371Z" />}
      </El>
      }
      {size === "L" && 
        <El
          localStyles={localStyles}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 25 25"
        >
          {theme === 'LIGHT' && <path fill="var(--light-1000)" d="M2.9901 6.04582C2.14665 6.04582 1.5 5.45679 1.5 4.71737C1.5 3.96541 2.1607 3.38892 2.9901 3.38892H22.0099C22.8393 3.38892 23.5 3.97795 23.5 4.71737C23.5 5.45679 22.8393 6.04582 22.0099 6.04582H2.9901ZM2.9901 13.8285C2.14665 13.8285 1.5 13.2395 1.5 12.5001C1.5 11.7607 2.1607 11.1716 2.9901 11.1716H22.0099C22.8393 11.1716 23.5 11.7607 23.5 12.5001C23.5 13.252 22.8393 13.8285 22.0099 13.8285H2.9901ZM2.9901 21.6112C2.14665 21.6112 1.5 21.0222 1.5 20.2828C1.5 19.5434 2.1607 18.9669 2.9901 18.9669H22.0099C22.8393 18.9669 23.5 19.5434 23.5 20.2828C23.5 21.0347 22.8393 21.6112 22.0099 21.6112H2.9901Z" />}
          {theme === 'DARK' && <path fill="var(--dark-1000)" d="M2.9901 6.04582C2.14665 6.04582 1.5 5.45679 1.5 4.71737C1.5 3.96541 2.1607 3.38892 2.9901 3.38892H22.0099C22.8393 3.38892 23.5 3.97795 23.5 4.71737C23.5 5.45679 22.8393 6.04582 22.0099 6.04582H2.9901ZM2.9901 13.8285C2.14665 13.8285 1.5 13.2395 1.5 12.5001C1.5 11.7607 2.1607 11.1716 2.9901 11.1716H22.0099C22.8393 11.1716 23.5 11.7607 23.5 12.5001C23.5 13.252 22.8393 13.8285 22.0099 13.8285H2.9901ZM2.9901 21.6112C2.14665 21.6112 1.5 21.0222 1.5 20.2828C1.5 19.5434 2.1607 18.9669 2.9901 18.9669H22.0099C22.8393 18.9669 23.5 19.5434 23.5 20.2828C23.5 21.0347 22.8393 21.6112 22.0099 21.6112H2.9901Z" />}
      </El>
      }
    </>
  );
}

export default Menu;

