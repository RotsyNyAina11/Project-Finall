import { Card, Paper, Typography } from "@mui/material";

interface PageHeaderProps{
    title: string;
    icon: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ( {title,  icon} ) => {
   
    return(
        <Paper elevation={0} 
               square
               sx={{
                backgroundColor: "#fdfdff"
               }}
               > 
            <div style={{
                padding: "15px",
                display: "flex",
                marginBottom: "5px"
            }}>
                <Card
                     sx={{
                        color: "#3c44b1 ",
                        display: "inline-block",
                        padding: "5px",

                    }}
                >
                    {icon}
                </Card>
                <div style={{
                    paddingLeft: "10px"
                }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: "black"
                        }}
                    >
                        {title}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader;