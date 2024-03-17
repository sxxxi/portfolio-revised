import { AspectRatio, Button, Icon, Image } from "@chakra-ui/react";

export default function IconButton() {
  return <AspectRatio ratio={1}>
    <Button bg={''}>
      <Image boxSize={'300'} src='/img/github-mark-white.svg' />
    </Button>
  </AspectRatio>
  
}