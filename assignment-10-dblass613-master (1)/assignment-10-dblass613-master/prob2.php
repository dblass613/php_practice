<?php

$arr = array(
"Ed" => array ("Exam 1" => 89, "Exam 2" => 76, "Exam 3" => 86 ),
"Ken" => array ("Exam 2" => 86, "Exam 3" => 91, "Exam 4" => 81, "Exam 5" => 78 ),
"Sue" => array ("Exam 1" => 82, "Exam 3" => 71, "Exam 5" => 79 ),
);
$max = 0;
foreach($arr as $studentName => $examData)
{
   foreach($examData as $exam => $marks)
   {
       if($marks > $max)
       {
           $max = $marks;
           $maxName = $studentName;
           $maxExam = $exam;
       }
   }  
}
echo "The highest score was $max, by $maxName on $maxExam. ";
?>