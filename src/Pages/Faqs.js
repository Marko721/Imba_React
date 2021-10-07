import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const questions = [
  {
    q: "How much experience do I need to be a travel RN?",
    a: "Usually you need at least one year in your specialty before applying for an assignment. However some facilities may require two or more years. Your recruiter will provide you with detailed information about assignment requirements. ",
  },
  {
    q: "What do I need to work as a travel RN?",
    a: "You need at least one year of experience, valid RN license, and BLS. Some facilities or specialties may require additional certifications, experience, and licenses. Your recruiter will provide you with detailed information about assignment requirements.",
  },
  {
    q: "When can I apply for an assignment?",
    a: "You can apply whenever you like. Although some assignments have specific start date, some start dates vary and can be flexible.",
  },
  {
    q: "How long does an assignment last?",
    a: "Typically assignments last 13 weeks, however some may last only two weeks. In some cases, a facility may offer an extension of an assignment with an increase in pay.",
  },
  {
    q: "What if I do not have a license for a state where I want to work?",
    a: "Imba Health can help you with a license for a particular state by guiding you through the process and even reimbursing the processing fee.",
  },
  {
    q: "Can I travel with a pet?",
    a: "Absolutely! We find that many nurses opt to travel with pets. There are plenty of housing options that are pet-friendly. Imba Health can always help you find the right housing.",
  },
  {
    q: "Can I travel with a friend, significant other or family?",
    a: "Of course, we encourage you to do so. Traveling with friends is always more fun. Imba Health can help you find housing or you can do it yourself.",
  },
  {
    q: "How long does orientation last?",
    a: "Usually the first day of an assignment is spent with HR (getting the badge, access to the charting system, getting to know the facility policies and rules, etc.). On the second day, you will receive some form of orientation from your assigned unit. The total number of days spent in orientation depends on your comfortability and the facility.",
  },
  {
    q: "What if something goes wrong or I do not feel the assignment is right for me?",
    a: "If something goes wrong, whether your flight is delayed, car brakes down, you cannot find housing or the assignment doesn’t look like what you have been expecting, please contact your recruiter ASAP and we will help you find the solution. Things happen. Life is life. No worries.",
  },
  {
    q: "Do I still get insurance when I work as a travel RN?",
    a: "At Imba Health we offer medical and dental insurance, you have the option to take ours or you can opt to purchase your own.",
  },
  {
    q: "What kind of shifts do I have to work?",
    a: "Each assignment is unique and has specific requirements. Whether you are a night owl or a day owl we can find an assignment that is right for you. You are in control.",
  },
  {
    q: "When do I get paid?",
    a: "Typically, after you begin an assignment you will be paid once a week on Friday with your first paycheck at the end of the second week. For example, if you started working on a Monday the 1st of June, you can expect to get paid on Friday the 12th of June and then every other Friday after that for the duration of the contract.",
  },
  {
    q: "What if I want to take a break between contracts?",
    a: "As a travel nurse you are your own boss! You can take as many contracts as you like or take off as much time as you need.",
  },
];

const Faqs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" color="secondary" gutterBottom>
          FAQs for nurses
        </Typography>
        {questions.map((question) => (
          <Accordion key={question.q}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{question.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};

export default Faqs;
