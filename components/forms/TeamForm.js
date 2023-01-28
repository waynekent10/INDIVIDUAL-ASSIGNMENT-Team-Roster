import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createOrgs, updateOrgs } from '../../api/teamsData';

const initialState = {
  team_name: '',
  private: '',
};

function TeamForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateOrgs(formInput).then(() => router.push(`/teams/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createOrgs(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrgs(patchPayload).then(() => {
          router.push('/teams');
        });
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Team</h2>

      <FloatingLabel controlId="floatingInput1" label="Team Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Team Name"
          name="team_name"
          value={formInput.team_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="private"
        name="private"
        label="private?"
        checked={formInput.private}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            private: e.target.checked,
          }));
        }}
      />
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Team</Button>
    </Form>
  );
}

TeamForm.propTypes = {
  obj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    team_name: PropTypes.string,
    private: PropTypes.string,
  }),
};
TeamForm.defaultProps = {
  obj: initialState,
};
export default TeamForm;
