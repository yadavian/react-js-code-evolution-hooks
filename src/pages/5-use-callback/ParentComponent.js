import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const ParentComponent = () => {

    //case 1 : sabhi 5 re-render hote h jab mai incage pe click karta hu but sirf incage button aur count-age component render hona chahiye tha. React.memo use karenege tab sirf wahi component render honge  jab state props change honge tab sirf wahi particular component render hote h. 

    //case 2 : ab jab mai memo use karne ke baad inc-age btn pe click karta hu tab 3 logs aate h 2 to count-age and inc btn but sath me ek aur inc-salary button bhi re-render hota h.
    // title ka koi props ya state nahi h isliye wo nhi hua re-render.
    //  but Count accepts age as props and Button accepts incage as props. toh wo dono re-render hote h lekin.
    //lekin ye inc-salary kyu re-render horaha h ?
    // jab bhi parent component re-render hota h tab, jitne bhi function as a props pass hote h re-render hote h, bcos function before re-render is not same as after re-render.
    //usecallback function ko cache karke rakhta h jab tak dependency change nhi hota.

    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(21000)

    const incage = useCallback(() => {
        setage(age + 1)
    }, [age]);

    const incsalary = useCallback(() => {
        setsalary(salary + 5000)
    }, [salary])

    return (
        <div className='m-5'>
            <Title />
            <br />
            <Count text='age' count={age} />
            <Button handleClick={incage}>Inc Age</Button>

            <br />
            <Count text='salary' count={salary} />
            <Button handleClick={incsalary}>Inc Salary</Button>
        </div>
    )
}

export default ParentComponent