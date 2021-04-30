import {Box, Flex, Image, Text} from "@chakra-ui/react";
import image from '../../assets/img/without-image.svg';

const WithoutChannel = () => {
    return (
        <div>
            <Flex width={'100%'} h={'90vh'}
                  flexDirection={'column'}
                  p={'25px'}
                  justify='center' align={'center'}>
                <Image src={image} boxSize="65%"
                       alt={'Without channel image'}
                />
                <Text color={'purple.300'} mt={'20px'}
                      fontWeight={'bold'}>Choose a channel and join a party</Text>

            </Flex>
        </div>
    );
};

export default WithoutChannel;
