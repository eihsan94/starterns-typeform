import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  SimpleGrid,
  GridItem,
  Flex,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function CallToActionWithAnnotation() {
  const [hidden, setHidden] = useState(false)
  const variants = (direction: number) => ({
    hidden: { opacity: 0, x: 0, y: direction * 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: direction * -100 },
  })
  const [qVariants, setQVariants] = useState(variants(1))
  const proceed = (key: number) => {
    setHidden(true)
    setQ(questions[key + 1])
    setTimeout(() => setHidden(false), 350)
  }
  const goBack = (key: number) => {
    setHidden(true)
    setQ(questions[key - 1])
    setTimeout(() => setHidden(false), 350)
  }
  const questions = [
    {
      title: 'STARTERNSウェブアプリを見積もる',
      description: 'あなたが作りたいウェブアプリを一緒に見積もりましょう',
      url: 'https://images.typeform.com/images/WCjHUqV9JhpQ/image/default',
      action: (
        <Button
          bg="black"
          color="white"
          _hover={{ bg: 'gray.800' }}
          onClick={() => {
            proceed(0)
          }}
        >
          見積開始
        </Button>
      ),
    },
    {
      title: '1',
      description: '1',
      // url: 'https://images.typeform.com/images/WCjHUqV9JhpQ/image/default',
      action: (
        <Button
          bg="black"
          color="white"
          _hover={{ bg: 'gray.800' }}
          onMouseEnter={() => {
            setQVariants(variants(1))
          }}
          onClick={() => {
            proceed(1)
          }}
        >
          次へ
        </Button>
      ),
    },
    {
      title: '2',
      description: '2',
      url: 'https://images.typeform.com/images/WCjHUqV9JhpQ/image/default',
      action: (
        <Flex>
          <Button
            bg="white"
            color="black"
            _hover={{ opacity: 0.8 }}
            onMouseEnter={() => {
              setQVariants(variants(-1))
            }}
            onClick={() => {
              goBack(2)
            }}
          >
            前へ
          </Button>
          <Button
            bg="black"
            color="white"
            _hover={{ bg: 'gray.800' }}
            onMouseEnter={() => {
              setQVariants(variants(1))
            }}
            onClick={() => {
              proceed(2)
            }}
          >
            次へ
          </Button>
        </Flex>
      ),
    },
    {
      title: '3',
      description: '3',
      url: 'https://images.typeform.com/images/WCjHUqV9JhpQ/image/default',
      action: (
        <Button
          bg="black"
          color="white"
          _hover={{ bg: 'gray.800' }}
          onClick={() => {
            proceed(3)
          }}
        >
          次へ
        </Button>
      ),
    },
    {
      title: '4',
      description: '4',
      url: 'https://images.typeform.com/images/WCjHUqV9JhpQ/image/default',
      action: (
        <Button
          bg="black"
          color="white"
          _hover={{ bg: 'gray.800' }}
          onClick={() => {
            // proceed(4)
          }}
        >
          次へ
        </Button>
      ),
    },
  ]

  const [q, setQ] = useState(questions[0])

  return (
    <Container maxW={'7xl'} h="100%">
      <AnimatePresence>
        {!hidden && (
          <motion.main
            variants={qVariants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            style={{ height: '100%' }}
          >
            <Stack as={Box} justify={'center'} h="100%">
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={4}
                h="100%"
                py={{ base: 0, md: 8 }}
              >
                <GridItem alignItems={'center'} display="flex">
                  <Stack gap="4">
                    <Box>
                      <Heading>{q.title}</Heading>
                      <Text>{q.description}</Text>
                    </Box>
                    <Box>{q.action}</Box>
                  </Stack>
                </GridItem>
                {q.url && (
                  <GridItem pos="relative">
                    <Image
                      src={q.url}
                      alt={q.url}
                      layout="fill"
                      objectFit="cover"
                    />
                  </GridItem>
                )}
              </SimpleGrid>
            </Stack>
          </motion.main>
        )}
      </AnimatePresence>
    </Container>
  )
}
