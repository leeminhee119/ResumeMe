import { Box, Flex } from '@chakra-ui/react';
import {
  ReferenceLinkBox,
  renderIcon,
  LINK_ICON_TYPES,
} from '~/components/molecules/ReferenceLinkBox';

export type LinkItemProps = {
  type?: 'default' | 'github' | 'blog';
  url?: string;
  onRemove: (url: string) => void;
};

const LinkItem = ({ url, type = 'github', onRemove }: LinkItemProps) => {
  const handleRemove = () => {
    if (url) {
      onRemove(url);
    }
  };

  return (
    <Flex
      gap={1}
      align={'center'}
      role="group"
    >
      <ReferenceLinkBox
        url={url}
        type={type}
      />
      <Box
        as="button"
        ml={1}
        p={0}
        onClick={handleRemove}
        fontSize="xs"
        display="none"
        role="group"
        fill="red"
        _groupHover={{
          display: 'block',
        }}
      >
        {renderIcon(LINK_ICON_TYPES.remove, 'lg', {
          color: 'red.500',
        })}
      </Box>
    </Flex>
  );
};

export default LinkItem;