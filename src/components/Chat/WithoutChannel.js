import {Box, Flex, Image, Text} from "@chakra-ui/react";
import image from '../../assets/img/without-image.svg';

const WithoutChannel = () => {
    return (
        <div>
            <Flex width={'100%'} h={'90vh'}
                  flexDirection={'column'}
                  p={'25px'}
                   align={'center'}>
                <Image src={image} boxSize={["65%",'40%']}
                       alt={'Without channel image'}
                       my={['20px','100px']}
                />
                <Text color={'gray.700'} textAlign={'center'}
                      px={'15px'} py='5px' rounded={'lg'}
                      bg={'purple.50'}
                      fontSize={'sm'}
                      fontWeight={'bold'}>Choose a channel and join a party 🎉</Text>

            </Flex>
        </div>
    );
};

export default WithoutChannel;
