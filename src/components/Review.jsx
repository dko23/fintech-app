import React from 'react'
import { rate } from './ratings';
import { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'
import { motion } from "framer-motion"

function Review() {
    const [index, setIndex] = useState(0);
    function nextClick() {

        if (index < rate.length - 1) {
            setIndex(index + 1)
        }
        ;
    }


    function previousClick() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    let opinion = rate[index];
    return (
        <div className="reviewer">
            <h2 className="text-center" style={{ fontWeight: 'bold'}}>Review</h2>
            <div className="text-center">
                <p>Hi there, Check out what some students have to say about the app!</p>
            </div>

            <div className="row test">
                <div className='reviewbody'>
                    <img src={opinion.img} className="portrait rounded-circle shadow-1-strong" alt="..." id="pic" />
                    <p className="review" id="rev">
                        {opinion.review}
                    </p>
                    <p id="name">-{opinion.name}</p>
                    <div className="next_buttons">
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='teal'
                            aria-label='Done'
                            fontSize='20px'
                            type='submit'
                            icon={<ArrowLeftIcon boxSize={4} />}
                            onClick={previousClick}
                        />

                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='teal'
                            aria-label='Done'
                            fontSize='20px'
                            type='submit'
                            icon={<ArrowRightIcon boxSize={4} />}
                            onClick={nextClick}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Review




