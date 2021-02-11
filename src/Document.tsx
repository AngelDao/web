import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Code,
  Stack,
  Skeleton,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'
import * as React from 'react'
import DocInputForm from './components/DocInputForm'
import { navigate, RouteComponentProps } from '@reach/router'
import useDoc from './hooks/useDoc'

interface DocProps extends RouteComponentProps {
  docId?: string
}

const Document = (props: DocProps) => {
  const { docId } = props
  const { isLoading, error, data: doc } = useDoc(docId)
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })
  const { colorMode } = useColorMode()

  const formatAnchorStatus = (anchorStatus: number) => {
    switch (anchorStatus) {
      case 0:
        return 'NOT_REQUESTED (0)'
      case 1:
        return 'PENDING (1)'
      case 2:
        return 'PROCESSING (2)'
      case 3:
        return 'ANCHORED (3)'
      case 4:
        return 'FAILED (4)'
      default:
        break
    }
  }

  return (
      <Box px={6} py={6}>
        <Heading mb={6} size="lg">
          Ceramic Document Viewer
        </Heading>
        {isOpen ? (
          <Box borderRadius={5} borderWidth={1} p={6} mb={6}>
            <Flex alignItems="center" wrap="wrap" mb={6}>
              <Heading size="md">Sample Documents</Heading>
              <Divider orientation="vertical" mx={3} />
              <Button onClick={onToggle} size="xs">
                Hide
              </Button>
            </Flex>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing="3">
            <Box
                p={3}
                borderRadius={5}
                onClick={() =>
                  navigate(
                    `/document/kjzl6cwe1jw146ujxp6pv7bc51qujdosa9j7pxf1zsioxgpap9d7soalhjm1fct`
                  )
                }
                borderWidth={3}
                borderColor={
                  docId ===
                  'kjzl6cwe1jw146ujxp6pv7bc51qujdosa9j7pxf1zsioxgpap9d7soalhjm1fct'
                    ? '#f0580e'
                    : 'gray.600'
                }
              >
                <Text fontWeight="bold" mb={3} fontSize="lg">
                  Basic Profile Schema
                </Text>
                <Text isTruncated={true} mb={3}>
                  k3y52l7qbv1frxjdr9…azw9j4txf4o6d2io
                </Text>
                {docId ===
                'kjzl6cwe1jw146ujxp6pv7bc51qujdosa9j7pxf1zsioxgpap9d7soalhjm1fct' ? (
                  <Text fontStyle="italic" color="#f0580e">
                    Viewing
                  </Text>
                ) : (
                  <Button size="sm">View</Button>
                )}
              </Box>
              <Box
                p={3}
                borderRadius={5}
                onClick={() =>
                  navigate(
                    `/document/k3y52l7qbv1frxjdr9qpn9ldvbxb0jg4eig7wtjkdu6gk84vyazw9j4txf4o6d2io`
                  )
                }
                borderWidth={3}
                borderColor={
                  docId ===
                  'k3y52l7qbv1frxjdr9qpn9ldvbxb0jg4eig7wtjkdu6gk84vyazw9j4txf4o6d2io'
                    ? '#f0580e'
                    : 'gray.600'
                }
              >
                <Text fontWeight="bold" mb={3} fontSize="lg">
                  Basic Profile Schema
                </Text>
                <Text isTruncated={true} mb={3}>
                  k3y52l7qbv1frxjdr9…azw9j4txf4o6d2io
                </Text>
                {docId ===
                'k3y52l7qbv1frxjdr9qpn9ldvbxb0jg4eig7wtjkdu6gk84vyazw9j4txf4o6d2io' ? (
                  <Text fontStyle="italic" color="#f0580e">
                    Viewing
                  </Text>
                ) : (
                  <Button size="sm">View</Button>
                )}
              </Box>
              <Box
                p={3}
                borderRadius={5}
                onClick={() =>
                  navigate(
                    `/document/kjzl6cwe1jw14bek5i7rcr1q9byw61w4rswrhmvja0kfos89ty0notx0vh7kx3b`
                  )
                }
                borderWidth={3}
                borderColor={
                  docId ===
                  'kjzl6cwe1jw14bek5i7rcr1q9byw61w4rswrhmvja0kfos89ty0notx0vh7kx3b'
                    ? '#f0580e'
                    : 'gray.600'
                }
              >
                <Text fontWeight="bold" mb={3} fontSize="lg">
                  Crypto Accounts Definition
                </Text>
                <Text isTruncated={true} mb={3}>
                  kjzl6cwe1jw14bek5i…fos89ty0notx0vh7kx3b
                </Text>
                {docId ===
                'kjzl6cwe1jw14bek5i7rcr1q9byw61w4rswrhmvja0kfos89ty0notx0vh7kx3b' ? (
                  <Text fontStyle="italic" color="#f0580e">
                    Viewing
                  </Text>
                ) : (
                  <Button size="sm">View</Button>
                )}
              </Box>
              <Box
                p={3}
                borderRadius={5}
                onClick={() =>
                  navigate(
                    `/document/kjzl6cwe1jw14anzfvjyint54cf2m7lb04xnsmsdem9emhvgn816hzecvzqa65g`
                  )
                }
                borderWidth={3}
                borderColor={
                  docId ===
                  'kjzl6cwe1jw14anzfvjyint54cf2m7lb04xnsmsdem9emhvgn816hzecvzqa65g'
                    ? '#f0580e'
                    : 'gray.600'
                }
              >
                <Text fontWeight="bold" mb={3} fontSize="lg">
                  User Profile
                </Text>
                <Text isTruncated={true} mb={3}>
                  kjzl6cwe1jw14anzf…hvgn816hzecvzqa65g
                </Text>
                {docId ===
                'kjzl6cwe1jw14anzfvjyint54cf2m7lb04xnsmsdem9emhvgn816hzecvzqa65g' ? (
                  <Text fontStyle="italic" color="#f0580e">
                    Viewing
                  </Text>
                ) : (
                  <Button size="sm">View</Button>
                )}
              </Box>
            </Stack>
          </Box>
        ) : (
          <Button onClick={onToggle} size="sm" mb={6}>
            Show Sample Documents
          </Button>
        )}
        <DocInputForm docId={docId} isLoading={isLoading} />
        {error ? (
          <Text mb={6}>🚨 Something's wrong – try another document</Text>
        ) : (
          <>
            <Box mb={6}>
              <Heading size="md" mb={3}>
                Document ID
              </Heading>
              {docId}
            </Box>
            <Divider my={6} />
            <Grid templateColumns="repeat(6, 1fr)" gap={6}>
              <GridItem colSpan={4}>
                <Box mb={6}>
                <Heading size="md" mb={3}>
                  Content
                </Heading>
                {doc?.state?.content ? (
                  Object.entries(doc?.state?.content).map((entry: any[]) => (
                    <Box mb={3}>
                      <Text mb={1} fontWeight="bold">
                        {entry[0] && entry[0].toString()}
                      </Text>
                      {typeof entry[1] === 'string' ? (
                        <Text>{entry[1]}</Text>
                      ) : (
                        <Box
                          backgroundColor={
                            colorMode === 'dark' ? 'gray.900' : 'gray.100'
                          }
                          p={3}
                          borderRadius={5}
                        >
                          <Code fontSize="sm" background="transparent" overflowX="auto" whiteSpace="pre" display="block">{JSON.stringify(entry[1], undefined, 2)}</Code>
                        </Box>
                      )}
                    </Box>
                  ))
                ) : (
                  <>
                    {isLoading ? (
                      <Skeleton height="20px" width={400} />
                    ) : (
                      <Text>Get a document to see its content</Text>
                    )}
                  </>
                )}
                </Box>
              </GridItem>
              <GridItem colSpan={2}>
                <Box>
                  <Heading mb={3} size="md">
                    Anchoring
                  </Heading>
                  <Box mb={3}>
                    <Text fontWeight="bold" mb={3}>
                      Status
                    </Text>
                    <Text>
                      {doc?.state?.anchorStatus &&
                        formatAnchorStatus(doc?.state?.anchorStatus)}
                    </Text>
                  </Box>
                  <Box mb={3}>
                    <Text fontWeight="bold">Block Number</Text>
                    <Text>{doc?.state?.anchorProof?.blockNumber}</Text>
                  </Box>
                  <Box mb={3}>
                    <Text fontWeight="bold">Block Timestamp</Text>
                    <Text>{doc?.state?.anchorProof?.blockTimestamp}</Text>
                  </Box>
                  <Box mb={3}>
                    <Text fontWeight="bold">Chain Id</Text>
                    <Text>{doc?.state?.anchorProof?.chainId}</Text>
                  </Box>
                </Box>
                <Divider my={5} />
                <Box>
                  <Heading mb={3} size="md">
                    Metadata
                  </Heading>
                  {doc?.state?.metadata ? (
                    Object.entries(doc?.state?.metadata).map((entry: any[]) => (
                      <Box mb={3}>
                        <Text fontWeight="bold" mb={3}>
                          {entry[0] && entry[0].toString()}
                        </Text>
                        <Text wordBreak="break-all">{entry[1] && entry[1].toString()}</Text>
                      </Box>
                    ))
                  ) : (
                    <>
                      {isLoading ? (
                        <Skeleton height="20px" width={400} />
                      ) : (
                        <Text>Get a document to see its metadata</Text>
                      )}
                    </>
                  )}
                </Box>
              </GridItem>
            </Grid>
          </>
        )}
        {/* {doc && (
          <Flex mb={6} alignItems="center">
            <Text mr={3}>Version</Text>
            <Select
              onChange={(e: any) => {
                navigate(`/document/${e.target.value}`)
              }}
              width={200}
            >
              {doc?.allCommitIds?.map((commitId: any, i: number) => (
                <option key={i} value={commitId}>
                  Version {i + 1}
                </option>
              ))}
            </Select>
          </Flex>
        )} */}
      </Box>
  )
}

export default Document