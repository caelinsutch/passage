import { NextPage } from "next";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Illustration, PageContainer } from "@/Components";
import TutorialBgImage from "@/Images/Tutorial/TutorialBgImage.png";

const cardContent: { title: string; body: string }[] = [
  {
    title: "⚡️ One-Click Apply",
    body: "Fill out your profile once and apply to as many jobs as you want from there directly on Passage. No long essay questions or inputting everything in your resume multiple times - we’ve been there.",
  },
  {
    title: "💥 The Best Texts",
    body: "Every week, we drop new jobs on our platform, with PT/FT options and every role from backend to HR. We build a personalized job drop and text you when it’s ready (kind of like DoorDash).",
  },
  {
    title: "🎉 Cue the Confetti",
    body: "Earn points for filling out your profile, applying to your first job, getting your first interview, gassing up your friends, and more! Redeem points for cute stickers and a faster job drop.",
  },
];

const TalentTutorial: NextPage = () => (
  <PageContainer>
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      overflow="hidden"
      zIndex={-1}
    >
      <Image src={TutorialBgImage} layout="fill" objectFit="fill" />
    </Box>
    <Box mx="auto" maxW={1100} mt="10vh" px={4}>
      <Illustration name="LogoIcon" mx="auto" mb={8} />
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        How Passage Works
      </Heading>
      <Stack direction="row" spacing={8}>
        {cardContent.map(({ body, title }) => (
          <Box layerStyle="card" key={title} px={4} py={8} flex={1}>
            <Heading size={{ base: "md", lg: "lg" }} mb={4}>
              {title}
            </Heading>
            <Text>{body}</Text>
          </Box>
        ))}
      </Stack>
      <Box mx="auto" mt={8} textAlign="center">
        <NextLink href="/dashboard">
          <Button colorScheme="purple" size="lg">
            Lets get Started
          </Button>
        </NextLink>
      </Box>
    </Box>
  </PageContainer>
);

export default TalentTutorial;
