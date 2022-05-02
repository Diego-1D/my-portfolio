import styled from 'styled-components';
import { theme } from '../theme/theme';
import {TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";


export const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.defaultGrey};
    border-top: 5px solid #151D34;
`;

export const Text = styled.label`
`;

export const SocialMedia = styled.div`
`;

export const Link = styled.a`
   color: ${theme.defaultGrey};
`;

export const Linkedin = styled(TiSocialLinkedin)`
    width: 40px;
    height: 40px;
`;

export const Github = styled(TiSocialGithub)`
    width: 40px;
    height: 40px;
`;
