import React from 'react'
import Link from 'gatsby-link'

import './index.css';

const AboutMePage = () => (
  <div className="Root">
    <p>Hey guys, my name is Shreyas. This is my first real attempt at writing things down 
        as a public and personal utility. I believe one of our main responsibilities is to reduce pain, and
        I've been working on achieving that in three different ways: 
    </p>
        <table>
            <thead>
                <th> Antidote </th>
                <th> Adds Life </th>
                <th> Saves Time </th>
                <th> Enjoy Life </th>
            </thead>
            <tr>
                <td>
                    Writing software
                </td>
                <td>
                </td>         
                <td>
                    X
                </td>         
                <td>
                    X
                </td>                                            
            </tr> 
            <tr>
                <td>
                    Making music
                </td>
                <td>
                    X
                </td>         
                <td>
                    
                </td>         
                <td>
                    X
                </td>            
            </tr>         
            <tr>
                <td>
                    Cooking food
                </td>
                <td>
                    X
                </td>         
                <td>
                </td>         
                <td>
                    X
                </td>            
            </tr>                     
        </table>

        <p>
            I'm going to do my best to teach what I've learned, and convey exactly how each of the above
            three things meet their approaches to reducing pain. 
        </p>

        <h2> Writing software </h2>
        
        <p>
            I started writing software when I was 15 or 16 as a result of family and societal role models. 
            It wasn't really until I entered college that I realized you could use it to save people time without
            any extra costs per person. I was pretty heavy into video games and mmorpgs, so I naturally had an
            interest towards the gaming industry. Which means I already knew writing software could help people
            enjoy their lives, but I started becoming a lot more fascinated by the other metric. I could finally
            conform to a contrarian ideal when people mentioned that "there are only 24 hours in a day". Well, 
            by basically being able to store sets of instructions - and therefore time - into a machine, we've freed up
            whatever amount of time we would have spent manually doing those tasks ourselves.
        </p>
        
        <h2> Making music </h2>

        <p>
            When I was about 13, I discovered an old Casio keyboard at a cousin's home in Bangalore, India.
            I learned my first tune (the main theme to a popular Bollywood movie at the time). 
        </p>            
        
        <iframe src="https://open.spotify.com/embed/track/251PNRmJU9KcUnFQAB5t6I" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>            

        <p>
            Cut to a few years later, I had been consistently taking piano lessons. However, one day, I heard 
            my first song that would make me want to pick up guitar.
        </p>
        
        <iframe src="https://open.spotify.com/embed/track/1c7UYTut2SBOPq64o2t0uN" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        

        <p>
            Since then, I've been writing and playing music for friends, events and myself. It's shown me how you can make any moment 
            special with an instrument and some imagination. With it, I've coped with all sorts of 
            life experiences, both positive and negative. If you're ever in San Francisco, feel free to attend 
            &nbsp;<a href="http://www.joerizzo.com/openmics/index.htm">one of the open mic events</a>.  There's a lot of great local performers that come out
            and play, and it's an overall really positive experience.
            Given my track record, there's an 80% probability I'll be there performing an original or cover as well.
        </p>
        <h2> Cooking food</h2>

        <p>
            With the assumption you don't work at a  <i>tech company</i>, you can save a significant amount of money, time and add
            enjoyment by routinely cooking food for yourself. It's one thing to know you can keep yourself alive, and 
            it's another to make something that tastes good. Once you get to the second step, it becomes the ultimate
            self-sustaining, feedback loop.
        </p>
  </div>
)

export default AboutMePage
