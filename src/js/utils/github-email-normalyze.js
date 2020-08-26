export default function githubEmailNormalyze (data) {
  const email = data.replace('60974381+boyarkinev@users.noreply.github.com', 'boyarkinev@gmail.com')
  return email
}

/* Убираем лишние символы штатного email адреса github
для отображения в карточках коммитов */