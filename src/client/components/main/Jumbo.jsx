import React from 'react';

import { Container, Typography, Button } from '@material-ui/core';

const style = {
  minHeight: '450px',
  backgroundImage: `url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBgkIBw8RCgkNDQ0PDQ0NDQ8NDRANFBEWFhQRExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0FDg8FGisZExkrKysrKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAwIBBf/EABYQAQEBAAAAAAAAAAAAAAAAAAAREv/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBgX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEhH/2gAMAwEAAhEDEQA/APchGoR62uFlmEahDSWYRqENJZhGoQ0lmEahDSWYRqENJZhGoQ0lmEahDSWYRqENJZhGoQ0lmEahDSWYRqENJZhGoQ0lmEahDSWYRqENJZhGoQ0lmEahDSWYRqENJUhG4RDSxDEI3CFEMQjcIUQxCNwhRDEI3CFEMQjcIUQxCNwhRDEI3CFEMQjcIUQxCNwhRDEI3CFEMQjcIUQxCNwhRDEI3CFEMQjcIUQxCNwhRDEI3CFEMQjcIUQpkypkyhpZhPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohPJlTJkohWEUyZV6W4ThFMmSiE4RTJkohOEUyZKIThFMmSiE4RTJkohOEUyZKIThFMmSiE4RTJkohOEUyZKIThFMmSiE4RTJkohOEUyZKIThFMmSiE4RTJkohOEUyZKIThFMmSiE4RTJkohSEVhEFLUJQisIUQlCKwhRCUIrCFEJQisIUQlCKwhRCUIrCFEJQisIUQlCKwhRCUIrCFEJQisIUQlCKwhRCUIrCFEJQisIUQlCKwhRCUIrCFEJQisIUQlCKwhRCkIpkyhpZlOEUyZKJThFMmSiU4RTJkolOEUyZKJThFMmSiU4RTJkolOEUyZKJThFMmSiU4RTJkolOEUyZKJThFMmSiU4RTJkolOEUyZKJThFMmSiU4RTJkolOEUyZKJThFMmSiVMmVIRFqxKeTKkIaSnkypCGkp5MqQhpKeTKkIaSnkypCGkp5MqQhpKeTKkIaSnkypCGkp5MqQhpKeTKkIaSnkypCGkp5MqQhpKeTKkIaSnkypCGkp5MqQhpKeTKkIaSnkypCGktwikI01NicIpCGmJwikIaYnCKQhpicIpCGmJwikIaYnCKQhpicIpCGmJwikIaYnCKQhpicIpCGmJwikIaYnCKQhpicIpCGmJwikIaYnCKQhpicIpCGmJwikIaY3CNwjVJjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjEI3CBjQ0DZkaAZGgGRoBkaAZGgGRoBkaAZGgGRoBkaAZGgGRoBkaAZGgGRoBkaAZGgHR0ZZcHQHB0BwdAcHQHB0BwdAcHQHB0BwdAcHQHB0BwdAcHQHB0BwdAcHQHB0AAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

function JumboComponent() {
  return (
    <div style={style}>
      <Container>
        <Typography variant="h3" color="white">
          글로벌 #1 Recent
        </Typography>
        <Typography variant="h2">
          새로운 방식으로 소통하세요
        </Typography>
        <Button variant="contained" color="primary">
          제품 데모 보기
        </Button>
        <Button variant="contained" color="primary">
          제품 무료 체험
        </Button>
        <Button variant="contained" color="primary">
          SALES CLOUD 가이드 투어
        </Button>
      </Container>
    </div>
  );
}

export default JumboComponent;
