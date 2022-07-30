import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "2 Sum",
    icon: "bi bi-code",
    color: "primary",
    date: "6 minutes ago",
  },
  {
    title: "Find Inorder Traversal",
    icon: "bi bi-code",
    color: "info",
    date: "12 minutes ago",
  },
  {
    title: "Find Postorder Traversal",
    icon: "bi bi-code",
    color: "danger",
    date: "18 minutes ago",
  },
  {
    title: "3 Sum",
    icon: "bi bi-code",
    color: "success",
    date: "22 minutes ago",
  },
  {
    title: "Find Pre-Order Traversal",
    icon: "bi bi-code",
    color: "dark",
    date: "50 minutes ago",
  },
  {
    title: "0-1 Knapsack",
    icon: "bi bi-code",
    color: "warning",
    date: "75 minutes ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Problems Solved Recently</CardTitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
