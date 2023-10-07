import { IconButton, InputBase, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from "../../them"
import { FiSearch } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { MdDarkMode } from 'react-icons/md';
import { BsFillPersonFill, BsLightbulbFill} from 'react-icons/bs';
import { AiTwotoneSetting} from 'react-icons/ai';
import { useContext } from "react";






function Topbar() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)
  return (
    <header className=" justify-between flex p-2">
    <div className=" flex rounded-[3px]" style={{backgroundColor:colors.primary[400]}} >
      <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
      <IconButton type="button" sx={{p:1}}>
        <FiSearch/>
      </IconButton>
    </div>
    <div className=" flex">
      <IconButton onClick={colorMode.toggleColorMode} type="button">
        {theme?.palette?.mode==='light'?
        <MdDarkMode />  
        :
        <BsLightbulbFill />  

        }
      </IconButton>

      <IconButton>
      <IoMdNotifications />
      </IconButton>

      <IconButton>
      <AiTwotoneSetting/>
      </IconButton>

      <IconButton>
      <BsFillPersonFill />
      </IconButton>


    </div>
    </header>
  )
}

export default Topbar
