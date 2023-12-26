import { HStack, SpaceProps, Tag } from "@chakra-ui/react"
import { color } from "framer-motion"

interface Tags {
    tags: Array<string>
    color: string
    marginTop?: SpaceProps['marginTop']
  }
  
const ArticleTags: React.FC<Tags> = (props) => {
    return (
      <HStack spacing={2} marginTop={props.marginTop}>
        {props.tags.map((tag) => {
          return (
            <Tag size={'md'} variant="solid" colorScheme={props.color} key={tag}>
              {tag}
            </Tag>
          )
        })}
      </HStack>
    )
  }

export default ArticleTags