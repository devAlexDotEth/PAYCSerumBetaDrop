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

export const Medium: FC<Props> = ({ color = 'white', theme = 'LIGHT', size = "S", localStyles }) => {
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
        {theme === 'LIGHT' && <path fill="var(--light-1000)" d="M13.1109 13.85C12.1198 13.85 11.5543 13.3125 11.5543 12.3663V4.63391C11.5543 3.68766 12.1198 3.15015 13.1109 3.15015H14.4379C15.4345 3.15015 16 3.68766 16 4.63391V12.3663C16 13.3125 15.4345 13.85 14.4379 13.85H13.1109ZM13.3124 12.7414H14.2475C14.645 12.7414 14.8074 12.579 14.8074 12.1927V4.81308C14.8074 4.42114 14.645 4.25877 14.2475 4.25877H13.3124C12.9149 4.25877 12.7469 4.42114 12.7469 4.81308V12.1927C12.7469 12.579 12.9149 12.7414 13.3124 12.7414ZM7.83651 13.85C6.83987 13.85 6.27996 13.3125 6.27996 12.3663V6.26885C6.27996 5.317 6.83987 4.77949 7.83651 4.77949H9.16349C10.1545 4.77949 10.7256 5.317 10.7256 6.26325V12.3663C10.7256 13.3125 10.1545 13.85 9.16349 13.85H7.83651ZM2.55655 13.85C1.56551 13.85 1 13.3125 1 12.3663V7.90939C1 6.95754 1.56551 6.42002 2.55655 6.42002H3.88354C4.88018 6.42002 5.44569 6.95754 5.44569 7.90379V12.3663C5.44569 13.3125 4.88018 13.85 3.88354 13.85H2.55655Z" />}
        {theme === 'DARK' && <path fill="var(--dark-1000)" d="M13.1109 13.85C12.1198 13.85 11.5543 13.3125 11.5543 12.3663V4.63391C11.5543 3.68766 12.1198 3.15015 13.1109 3.15015H14.4379C15.4345 3.15015 16 3.68766 16 4.63391V12.3663C16 13.3125 15.4345 13.85 14.4379 13.85H13.1109ZM13.3124 12.7414H14.2475C14.645 12.7414 14.8074 12.579 14.8074 12.1927V4.81308C14.8074 4.42114 14.645 4.25877 14.2475 4.25877H13.3124C12.9149 4.25877 12.7469 4.42114 12.7469 4.81308V12.1927C12.7469 12.579 12.9149 12.7414 13.3124 12.7414ZM7.83651 13.85C6.83987 13.85 6.27996 13.3125 6.27996 12.3663V6.26885C6.27996 5.317 6.83987 4.77949 7.83651 4.77949H9.16349C10.1545 4.77949 10.7256 5.317 10.7256 6.26325V12.3663C10.7256 13.3125 10.1545 13.85 9.16349 13.85H7.83651ZM2.55655 13.85C1.56551 13.85 1 13.3125 1 12.3663V7.90939C1 6.95754 1.56551 6.42002 2.55655 6.42002H3.88354C4.88018 6.42002 5.44569 6.95754 5.44569 7.90379V12.3663C5.44569 13.3125 4.88018 13.85 3.88354 13.85H2.55655Z" />}
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
            {theme === 'LIGHT' && <path fill="var(--light-1000)" d="M15.033 15.9199C13.8438 15.9199 13.1652 15.2749 13.1652 14.1394V4.86059C13.1652 3.72509 13.8438 3.08008 15.033 3.08008H16.6254C17.8214 3.08008 18.5 3.72509 18.5 4.86059V14.1394C18.5 15.2749 17.8214 15.9199 16.6254 15.9199H15.033ZM15.2749 14.5896H16.397C16.874 14.5896 17.0689 14.3947 17.0689 13.9311V5.0756C17.0689 4.60527 16.874 4.41043 16.397 4.41043H15.2749C14.7979 4.41043 14.5963 4.60527 14.5963 5.0756V13.9311C14.5963 14.3947 14.7979 14.5896 15.2749 14.5896ZM8.70381 15.9199C7.50784 15.9199 6.83595 15.2749 6.83595 14.1394V6.82252C6.83595 5.6803 7.50784 5.03529 8.70381 5.03529H10.2962C11.4854 5.03529 12.1708 5.6803 12.1708 6.8158V14.1394C12.1708 15.2749 11.4854 15.9199 10.2962 15.9199H8.70381ZM2.36786 15.9199C1.17861 15.9199 0.5 15.2749 0.5 14.1394V8.79116C0.5 7.64895 1.17861 7.00393 2.36786 7.00393H3.96025C5.15622 7.00393 5.83483 7.64895 5.83483 8.78445V14.1394C5.83483 15.2749 5.15622 15.9199 3.96025 15.9199H2.36786Z" />}
            {theme === 'DARK' && <path fill="var(--dark-1000)" d="M15.033 15.9199C13.8438 15.9199 13.1652 15.2749 13.1652 14.1394V4.86059C13.1652 3.72509 13.8438 3.08008 15.033 3.08008H16.6254C17.8214 3.08008 18.5 3.72509 18.5 4.86059V14.1394C18.5 15.2749 17.8214 15.9199 16.6254 15.9199H15.033ZM15.2749 14.5896H16.397C16.874 14.5896 17.0689 14.3947 17.0689 13.9311V5.0756C17.0689 4.60527 16.874 4.41043 16.397 4.41043H15.2749C14.7979 4.41043 14.5963 4.60527 14.5963 5.0756V13.9311C14.5963 14.3947 14.7979 14.5896 15.2749 14.5896ZM8.70381 15.9199C7.50784 15.9199 6.83595 15.2749 6.83595 14.1394V6.82252C6.83595 5.6803 7.50784 5.03529 8.70381 5.03529H10.2962C11.4854 5.03529 12.1708 5.6803 12.1708 6.8158V14.1394C12.1708 15.2749 11.4854 15.9199 10.2962 15.9199H8.70381ZM2.36786 15.9199C1.17861 15.9199 0.5 15.2749 0.5 14.1394V8.79116C0.5 7.64895 1.17861 7.00393 2.36786 7.00393H3.96025C5.15622 7.00393 5.83483 7.64895 5.83483 8.78445V14.1394C5.83483 15.2749 5.15622 15.9199 3.96025 15.9199H2.36786Z" />}
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
            {theme === 'LIGHT' && <path fill="var(--light-1000)" d="M19.8774 21.06C18.2917 21.06 17.3869 20.2 17.3869 18.686V6.31421C17.3869 4.80021 18.2917 3.94019 19.8774 3.94019H22.0006C23.5952 3.94019 24.5 4.80021 24.5 6.31421V18.686C24.5 20.2 23.5952 21.06 22.0006 21.06H19.8774ZM20.1999 19.2862H21.696C22.332 19.2862 22.5918 19.0264 22.5918 18.4083V6.60088C22.5918 5.97378 22.332 5.71398 21.696 5.71398H20.1999C19.5638 5.71398 19.2951 5.97378 19.2951 6.60088V18.4083C19.2951 19.0264 19.5638 19.2862 20.1999 19.2862ZM11.4384 21.06C9.84379 21.06 8.94793 20.2 8.94793 18.686V8.93011C8.94793 7.40715 9.84379 6.54713 11.4384 6.54713H13.5616C15.1473 6.54713 16.061 7.40715 16.061 8.92115V18.686C16.061 20.2 15.1473 21.06 13.5616 21.06H11.4384ZM2.99048 21.06C1.40482 21.06 0.5 20.2 0.5 18.686V11.555C0.5 10.032 1.40482 9.17199 2.99048 9.17199H5.11366C6.70829 9.17199 7.6131 10.032 7.6131 11.546V18.686C7.6131 20.2 6.70829 21.06 5.11366 21.06H2.99048Z" />}
            {theme === 'DARK' && <path fill="var(--dark-1000)" d="M19.8774 21.06C18.2917 21.06 17.3869 20.2 17.3869 18.686V6.31421C17.3869 4.80021 18.2917 3.94019 19.8774 3.94019H22.0006C23.5952 3.94019 24.5 4.80021 24.5 6.31421V18.686C24.5 20.2 23.5952 21.06 22.0006 21.06H19.8774ZM20.1999 19.2862H21.696C22.332 19.2862 22.5918 19.0264 22.5918 18.4083V6.60088C22.5918 5.97378 22.332 5.71398 21.696 5.71398H20.1999C19.5638 5.71398 19.2951 5.97378 19.2951 6.60088V18.4083C19.2951 19.0264 19.5638 19.2862 20.1999 19.2862ZM11.4384 21.06C9.84379 21.06 8.94793 20.2 8.94793 18.686V8.93011C8.94793 7.40715 9.84379 6.54713 11.4384 6.54713H13.5616C15.1473 6.54713 16.061 7.40715 16.061 8.92115V18.686C16.061 20.2 15.1473 21.06 13.5616 21.06H11.4384ZM2.99048 21.06C1.40482 21.06 0.5 20.2 0.5 18.686V11.555C0.5 10.032 1.40482 9.17199 2.99048 9.17199H5.11366C6.70829 9.17199 7.6131 10.032 7.6131 11.546V18.686C7.6131 20.2 6.70829 21.06 5.11366 21.06H2.99048Z" />}
        </El>
      }
    </>
  );
}

export default Medium;






