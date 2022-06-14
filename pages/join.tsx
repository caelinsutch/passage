import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Illustration, PageContainer, RegisterForm } from "@/Components";
import JoinRightImage from "@/Images/Join/JoinRight.png";
import authorizeServerSide from "@/Utils/authorizeServerSide";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await authorizeServerSide(ctx);
  if (res) {
    return { redirect: { destination: "/dashboard", permanent: false } };
  }
  return { props: {} };
};

const Join: NextPage = () => (
  <PageContainer>
    <Flex direction={{ base: "column", md: "row" }} minH="100vh">
      <Box flex={1}>
        <Box
          width="50vw"
          height="100vh"
          position="fixed"
          overflow="hidden"
          zIndex={-1}
        >
          <Image src={JoinRightImage} layout="fill" objectFit="fill" />
        </Box>
        <Flex
          p={8}
          justifyContent="space-between"
          height="100%"
          direction="column"
        >
          <Box flex={1}>
            <Illustration name="LogoHorizontal" />
          </Box>
          <Heading size="4xl" color="white" mb={24}>
            Hot People Learn Web3 on Passage 😉
          </Heading>
          <Box flex={1} />
        </Flex>
      </Box>
      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        height="100vh"
        direction="column"
      >
        <Box maxW={400} textAlign="center" mb={24}>
          <Illustration name="LogoIcon" mx="auto" mb={8} />
          <Heading size="xl" textAlign="center" mb={8}>
            Ready to Start Your Journey in Web3?
          </Heading>
          <RegisterForm />
        </Box>
      </Flex>
    </Flex>
  </PageContainer>
);

export default Join;
