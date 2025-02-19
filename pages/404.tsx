import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111 !important;
  color: #fff !important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  font-family: 'Playfair Display', serif;
  margin: 0;
  background: linear-gradient(to right, #ffffff, #a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Message = styled(motion.p)`
  font-size: 1.5rem;
  margin: 2rem 0;
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 2px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HomeLink = styled(motion.div)<{ $initial: any; $animate: any; $transition: any; $whileHover: any }>`
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 1rem 2rem;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #ffffff;
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #000000;
    &:before {
      transform: translateX(100%);
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
    <Container>
      <ErrorCode
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </ErrorCode>
      <Message
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        The page you are looking for does not exist.
      </Message>
      <Link href="/" passHref legacyBehavior>
        <HomeLink
          as="a"
          $initial={{ opacity: 0 }}
          $animate={{ opacity: 1 }}
          $transition={{ duration: 0.8, delay: 0.6 }}
          $whileHover={{ scale: 1.05 }}
        >
          Return Home
        </HomeLink>
      </Link>
    </Container>
    </Layout>
  );
};

export default NotFoundPage;