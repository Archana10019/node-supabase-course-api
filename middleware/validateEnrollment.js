const validateEnrollment = (req, res, next) => {
  const { student_name, course_id } = req.body;
    if (!student_name || !course_id) {
    return res.status(400).json({ error: "Missing required fields: student_name and course_id" });
  } 
    next();
}

export default validateEnrollment;